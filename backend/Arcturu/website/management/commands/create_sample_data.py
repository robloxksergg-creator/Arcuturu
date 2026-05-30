from django.core.management.base import BaseCommand
from website.models import News


class Command(BaseCommand):
    help = 'Create sample news items'

    def handle(self, *args, **options):
        samples = [
            {
                'title': 'Вступай в команду',
                'slug': 'join-team',
                'category': 'general',
                'image': 'images/news1.jpg',
                'excerpt': 'Хотите помогать игрокам и участвовать в жизни сервера? Присоединяйтесь!',
                'content': 'Подробности о том, как вступить в команду...'
            },
            {
                'title': 'Необычный BuildBattle',
                'slug': 'buildbattle-2026',
                'category': 'contest',
                'image': 'images/news2.jpg',
                'excerpt': 'Новый конкурс BuildBattle — розыгрыш призов среди победителей.',
                'content': 'Информация о конкурсе и правила участия.'
            }
        ]

        for s in samples:
            obj, created = News.objects.get_or_create(slug=s['slug'], defaults=s)
            if created:
                self.stdout.write(self.style.SUCCESS(f"Created {obj.title}"))
            else:
                self.stdout.write(self.style.NOTICE(f"Exists {obj.title}"))
