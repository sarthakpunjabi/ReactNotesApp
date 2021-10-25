from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer
# Create your views here.

@api_view(['GET'])
def getroutes(request):
    return Response("Our Api")

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    Serializer = NoteSerializer(notes,many=True)
    return Response(Serializer.data)


@api_view(['GET'])
def getNote(request,pk):
    note = Note.objects.get(id=pk)
    Serializer = NoteSerializer(note,many=False)
    return Response(Serializer.data)