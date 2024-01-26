from rest_framework.serializers import ModelSerializer
from .models import MyLink 

class LinkSerialiser(ModelSerializer):
    class Meta:
        model = MyLink
        fields = '__all__'
        read_only_fields = ['hash']