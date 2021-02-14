class User {
    id = null;
    title = null;
    description = null;
    username = null;
    subjectname = null;
    created_at = null;
    updated_at = null;

    confirmed = null;

    constructor(obj) {
        // IF AN OBJECT WAS PASSED THEN INITIALISE PROPERTIES FROM THAT OBJECT
        for (var prop in obj) this[prop] = obj[prop];

        this.username = this.user.name;
        this.subjectname = this.subject.name;
    }
}

export default User