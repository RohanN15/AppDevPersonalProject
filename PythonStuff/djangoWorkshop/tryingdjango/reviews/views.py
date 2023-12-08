from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from reviews.models import Review

# Create your views here.
class AppDevClubReviewsView(APIView):
    def get(self, request):
        reviews = []
        names = []
        emails = []
        numbers = []
        for review in Review.objects.filter():
            reviews.append(review.review_text)
            names.append(review.name_text)
            numbers.append(review.number_text)
            emails.append(review.email_text)
        return Response({'reviews': reviews, 'names': names, 'numbers': numbers, 'emails': emails})

class CreateAppDevClubReview(APIView):
    def post(self, request):
        review = request.data['review']
        name = request.data['name']
        email = request.data['email']
        number = request.data['number']
        if review != '':
            new_database_entry = Review(review_text=review, name_text=name, email_text=email, number_text=number)
            new_database_entry.save()
            return Response({'message': 'success'})
        else:
            return Response({'message': 'failure'})