from django.shortcuts import render

# Create your views here.


def Home(request):
    active_page='home';
    context={'active_page':active_page}
    return render(request, 'base/home.html',context)

def Rooms(request):
    active_page='rooms';
    context={'active_page':active_page}
    return render(request,'base/rooms.html',context)

def JaloriComplex(request):
    active_page='rooms';
    context={'active_page':active_page}
    return render(request,'base/rooms/jalori-complex.html',context)

def FamilySuite(request):        
        return render(request,'base/rooms/family-suite.html')

def ContactUs(request):
    active_page='contact'
    context={'active_page':active_page}
    return render(request,'base/contact-us.html',context)
