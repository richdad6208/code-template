import { http } from '@/src/api/http';
import { useQuery } from '@tanstack/react-query';

export const fetchUserInfo = () => {
    return useQuery({
        queryKey: ['FREE_USER'],
        queryFn: () => http.get('/common/user'),
    });
};
