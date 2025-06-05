import {
    createSearchParams,
    NavigateOptions,
    URLSearchParamsInit,
    useNavigate,
} from 'react-router';

/**
 * uuseNavigateSearch 훅을 반환합니다.
 *
 * 이 훅은 다음의 역할을 합니다.
 * 1. 기존 navigate 함수를 사용하여 페이지 이동을 수행합니다.
 * 2. queryParams가 존재할 경우, search 파라미터를 추가합니다.
 */
type NavigateSearchParams = {
    to: string;
    queryParams?: URLSearchParamsInit;
};

type UseNavigateSearch = (params: NavigateSearchParams, options?: NavigateOptions) => void;

export function useNavigateSearch(): UseNavigateSearch {
    const navigate = useNavigate();

    return ({ to, queryParams }, options: NavigateOptions = {}) => {
        const search = queryParams ? `?${createSearchParams(queryParams)}` : '';
        navigate({ pathname: to, search }, options);
    };
}
