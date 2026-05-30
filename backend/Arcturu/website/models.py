from django.db import models
from django.urls import reverse


class News(models.Model):
    CATEGORY_CHOICES = [
        ('general', 'General'),
        ('event', 'Event'),
        ('contest', 'Contest'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES, default='general')
    image = models.CharField(max_length=255, blank=True, help_text='Относительный путь в static, например images/news1.jpg')
    excerpt = models.TextField(blank=True)
    content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('news_detail', args=[self.slug])
