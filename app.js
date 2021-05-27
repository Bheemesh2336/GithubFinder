// Init Github
const github = new GitHub;
// Init UI
const ui = new UI;
// Search Input
const searchUser = document.getElementById('searchUser');
// Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message == 'Not Found') {
                    // Show Alert to Use(UI JS)
                    ui.showAlert('User Not Found ', 'alert alert-danger');
                } else {
                    // Show Profiels  
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }
    else {
        // CLear Profiles
        ui.clearProfile();
    }
});