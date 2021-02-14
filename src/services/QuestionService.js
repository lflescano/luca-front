import Environment from "../environment";

import Api from './ApiService';
import { AuthService } from './AuthService';

import Question from "../models/Question";

export const QuestionService = {
    questions: (page = 1, perPage = 15) => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/questions?page=${page}&per_page=${perPage}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },

    question: (id) => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/questions/${id}`, 'GET'
            ).then(data => {
                resolve(new Question(data));
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },

    createQuestion: (data) => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/questions`, 'POST', data
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
}
