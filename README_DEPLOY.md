# Documentación de despliegue: Frontend React + Vite y Backend Flask con Nginx en VPS

## 1. Estructura de carpetas

```
/home/linuxadmin/web/
  ├── backend/        # Código backend Flask
  ├── frontend/       # Código frontend React (Vite)
  ├── nginx-backend.conf
  └── nginx-frontend.conf
```

## 2. Backend Flask

### a) Crear entorno virtual e instalar dependencias
```bash
python3 -m venv ~/entorno
source ~/entorno/bin/activate
pip install flask gunicorn
```

### b) Código ejemplo en `backend/app.py`
```python
from flask import Flask, jsonify
app = Flask(__name__)
@app.route("/")
def hello():
    return jsonify(message="¡Hola desde Flask!")
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

### c) Ejecutar backend con gunicorn
```bash
cd ~/web/backend
source ~/entorno/bin/activate
gunicorn --bind 0.0.0.0:5000 app:app
```

## 3. Frontend React (Vite)

### a) Crear proyecto
```bash
cd ~/web
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### b) Crear archivo `.env` en `frontend/`
```
VITE_BACKEND_URL=http://vae.45.235.241.243.nip.io/
```

### c) Crear componente para consumir backend
`src/BackendHello.jsx`:
```jsx
import { useEffect, useState } from "react";
function BackendHello() {
  const [message, setMessage] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    fetch(backendUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error: " + err));
  }, []);
  return (
    <div>
      <h2>Respuesta del backend:</h2>
      <p>{message}</p>
    </div>
  );
}
export default BackendHello;
```

### d) Agregar el componente en `src/App.jsx`
```jsx
import BackendHello from './BackendHello';
// ...
<BackendHello />
```

### e) Generar build de producción
```bash
npm run build
```

## 4. Configuración de Nginx

### a) nginx-backend.conf
```
server {
    listen 80;
    server_name vae.45.235.241.243.nip.io;
    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### b) nginx-frontend.conf
```
server {
    listen 80;
    server_name va.45.235.241.243.nip.io;
    root /home/linuxadmin/web/frontend/dist;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### c) Habilitar configuraciones en Nginx
```bash
sudo cp nginx-backend.conf /etc/nginx/sites-available/
sudo cp nginx-frontend.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/nginx-backend.conf /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/nginx-frontend.conf /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo systemctl reload nginx
```

## 5. Permisos de carpetas para servir el frontend
```bash
sudo chown -R www-data:www-data /home/linuxadmin/web/frontend/dist
sudo chmod -R 755 /home/linuxadmin/web/frontend/dist
sudo chmod o+x /home /home/linuxadmin /home/linuxadmin/web /home/linuxadmin/web/frontend /home/linuxadmin/web/frontend/dist
```


## 6. Crear y habilitar el servicio systemd para el backend

1. Crea el archivo `vae.service` en `/home/linuxadmin/web/` con el siguiente contenido (ajusta usuario si es necesario):

```ini
[Unit]
Description=Gunicorn instance to serve Flask backend
After=network.target

[Service]
User=linuxadmin
Group=www-data
WorkingDirectory=/home/linuxadmin/web/backend
Environment="PATH=/home/linuxadmin/entorno/bin"
ExecStart=/home/linuxadmin/entorno/bin/gunicorn --workers 3 --bind 0.0.0.0:5000 app:app

[Install]
WantedBy=multi-user.target
```

2. Copia y habilita el servicio:
```bash
sudo cp /home/linuxadmin/web/vae.service /etc/systemd/system/vae.service
sudo systemctl daemon-reload
sudo systemctl enable vae
sudo systemctl start vae
sudo systemctl status vae
```

Con esto, el backend Flask quedará funcionando como servicio y se iniciará automáticamente tras reiniciar el VPS.

## 7. Acceso desde el navegador
- Frontend: http://va.45.235.241.243.nip.io/
- Backend: http://vae.45.235.241.243.nip.io/

## 8. Notas
- Si ves error 500 en el frontend, revisa los permisos y los logs de Nginx.
- Si ambos subdominios muestran el backend, revisa los server_name en los archivos de configuración.
- Usa nip.io para pruebas rápidas de subdominios apuntando a tu IP pública.
