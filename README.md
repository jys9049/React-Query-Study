useQuery << 주로 GET 요청 할 때 사용

useQuery({
 queryKey: ['string', dependency] << [키, 종속 변수] - 종속 변수 값이 변할 때 마다 재호출
 queryFn: Promise를 반환하는 함수
 ...options 그 외 옵션 https://tanstack.com/query/v4/docs/react/reference/useQuery << 공식 문서
})

 useMutation({
 mutateFn: Promise를 반환하는 함수
 onSuccess: 성공 시 호출 할 함수
 onError: 성공 시 호출 할 함수
 ...options 그 외 옵션 https://tanstack.com/query/v4/docs/react/reference/useMutation << 공식 문서
})
