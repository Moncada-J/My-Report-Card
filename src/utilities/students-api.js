const BASE_URL = '/api/students';

export function getAll() {
    return fetch(BASE_URL).then(res => res.json());
}

export function create(stud) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(stud),
    }).then(res => res.json());
}

export function update(stud) {
    return fetch(`${BASE_URL}/${stud._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(stud)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}