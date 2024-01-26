from django.urls import path 
from . import views

urlpatterns = [
    path('shortener/', views.create_link, name="shortener")
]