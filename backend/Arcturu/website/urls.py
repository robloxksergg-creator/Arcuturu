from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/news/', views.news_list, name='news_list'),
    path('about/news/<slug:slug>/', views.news_detail, name='news_detail'),
]
