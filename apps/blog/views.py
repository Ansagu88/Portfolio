from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions


from .models import *
from apps.category.models import Category

from .serializers import *
from .pagination import *

# Create your views here.


class BlogListView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        if Post.objects.all().exists():

            posts = Post.objects.all()
            
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
            
        else:
            print('Post does not exist')
            return Response({'error': 'Post does not exist'}, status=status.HTTP_404_NOT_FOUND)    




