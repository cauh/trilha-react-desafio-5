import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wrqseiduxeqrcjikpugz.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndycXNlaWR1eGVxcmNqaWtwdWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4MDIwOTksImV4cCI6MTk5ODM3ODA5OX0.GuvZ440InD9rS4U_WVZjzhFl6Fm6tWnD5qpOyLrMeRk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndycXNlaWR1eGVxcmNqaWtwdWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4MDIwOTksImV4cCI6MTk5ODM3ODA5OX0.GuvZ440InD9rS4U_WVZjzhFl6Fm6tWnD5qpOyLrMeRk"
    }
})