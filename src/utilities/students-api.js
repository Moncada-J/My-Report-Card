const BASE_URL = '/api/students';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(student) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(student)
    }).then(res => res.json());
}