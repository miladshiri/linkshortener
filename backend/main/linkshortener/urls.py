from django.urls import path 
from . import views

urlpatterns = [
    path('shortener/', views.create_link, name="shortener"),
    path('get-link/<str:hash>/', views.get_link, name="get-link")
]