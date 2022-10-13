import { environment } from "src/environments/environment";

export const API_URL = {
    'Activity': {
        'get': `${environment.apiUrl}/${environment.apiVersion ? environment.apiVersion+"/": ''}activity`,
        'post': '',
        'delete': '',
        'patch':''
    },
    'JOKES': {
        'get': `${environment.jokeApUrl}`,
    }
}