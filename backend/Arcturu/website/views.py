from django.shortcuts import render, get_object_or_404
from django.conf import settings
from .models import News


def check_mc_status():
    server_addr = getattr(settings, 'MINECRAFT_SERVER', None)
    if not server_addr:
        return {'online': False}

    try:
        from mcstatus import JavaServer
        server = JavaServer.lookup(server_addr)
        status = server.status()
        return {
            'online': True,
            'players': status.players.online,
            'max_players': status.players.max,
            'motd': getattr(status, 'description', '')
        }
    except Exception:
        return {'online': False}


def index(request):
    status = check_mc_status()
    news = News.objects.all()[:5]
    return render(request, 'website/index.html', {'status': status, 'news_list': news, 'server_address': settings.MINECRAFT_SERVER})


def news_list(request):
    items = News.objects.all()
    return render(request, 'website/news_list.html', {'news_list': items, 'server_address': settings.MINECRAFT_SERVER})


def news_detail(request, slug):
    item = get_object_or_404(News, slug=slug)
    return render(request, 'website/news_detail.html', {'news': item, 'server_address': settings.MINECRAFT_SERVER})
