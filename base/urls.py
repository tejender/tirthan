from django.urls import path
from . import views
urlpatterns = [
    path('', views.Home, name='home'),
    path('rooms/' , views.Rooms,name='rooms'),
    path('rooms/family-suite/' , views.FamilySuite,name='family-suite'),
    path('contact-us/' , views.ContactUs,name='contact-us'),
]