from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import MyLink
from .serializers import LinkSerialiser

@api_view(['POST'])
def create_link(request):
    serializer = LinkSerialiser(data=request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET'])
def get_link(request, hash):
    link = get_object_or_404(MyLink, hash=hash)
    serializer = LinkSerialiser(link, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def get_links(request):
    links = MyLink.objects.all()
    serializer = LinkSerialiser(links, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_link(request, hash):
    link = get_object_or_404(MyLink, hash=hash)
    link.delete()
    return Response('Link got deleted!')