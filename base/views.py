from django.shortcuts import render

# Create your views here.


def Home(request):
    active_page='rooms';
    context={active_page:active_page}
    return render(request, 'base/home.html',context)

def Rooms(request):
    return render(request,'base/rooms.html')
