from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import MyLink
from .serializers import LinkSerialiser

@api_view(['POST'])
def create_link(request):
    # my_link = MyLink.objects.create()
    # link = request.get['link']
    print(request.data)
    serializer = LinkSerialiser(data=request.data)
    if serializer.is_valid():
        serializer.save()
    
    print(serializer.data)
    return Response(serializer.data)
