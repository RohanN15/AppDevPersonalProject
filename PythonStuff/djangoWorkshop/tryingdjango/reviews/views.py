from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
reviews = []
class AppDevClubReviewsView(APIView):
    def post(self, request):
        new_rev = request.data.get('review')
        if new_rev:
            reviews.append(new_rev)
        else:
            reviews.append("Error: No String found")
        return Response({'reviews': reviews})