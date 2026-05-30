# Minecraft server website (Django)

Quick setup:

```powershell
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Edit `Arcturu/settings.py` and set `MINECRAFT_SERVER` to your server (example: `play.example.com:25565`).

Place static images under `static/images/` (e.g. `hero.jpg`, news images).
