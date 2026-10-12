import os

from django.shortcuts import render
from django.http import JsonResponse

def health(request):
    return JsonResponse({
        "status": "ok",
        "items": ["Configurar Docker", "Automatizar CI", "Publicar no GHCR"]
    })


# Create your views here.
