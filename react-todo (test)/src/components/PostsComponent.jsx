// PostsComponent.jsx
const { isError, isLoading, data } = useQuery('posts', fetchPosts, {
    cacheTime: 5000,
    staleTime: 10000,
    refetchOnWindowFocus: true,
    keepPreviousData: true
})
