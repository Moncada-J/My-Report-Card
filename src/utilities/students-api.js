const BASE_URL = '/api/students';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}