// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    data = await fetch(url).then(response => response.json());
} 
fetchCourses();

/* Your Tasks:
    1. Output the title of the first course to the console.
    2. Output the name of the course's instructor to the console.
    3. Output the title of the first course to the .courses section.
    4. Output the title and the instructor of the first course to the .courses section.
    5. Output ALL of the course titles to the console.
    6. Output ALL of the course titles to the .courses section.
    7. Output ALL of the diversity intensive courses to the results section.
    8. Questions to ponder:
        * How could you make this interface 
          more useful and engaging?
        * How could you allow your user to...
            * Select which department they want to view?
            * Select which term they want to view?
            * Only view classes that meet on Tuesdays and Thursdays? 
*/


function search() {
    console.log(data);
    console.log(data[0].Title);
    console.log(data[0].Instructors[0].Name);
    
    // clear out the search results:
    document.querySelector('.courses').innerHTML = '';
    // Output the title of the first course to the ".courses" section
    // of the web page. 
    // 1. How do you target the ".courses" section?
    // document.querySelector('.courses').innerHTML = data[900].Title + ' - ' + data[900].Instructors[0].Name;
    let i = 0;
    const searchTerm = document.querySelector('#search_term').value;
    while (i < data.length) {
        
        let instructor = 'TBD';
        if (data[i].Instructors.length > 0) {
            instructor = data[i].Instructors[0].Name;
        }
        if (instructor.includes(searchTerm) || data[i].Title.includes(searchTerm)) {
            // Lines of code that add a new element to the DOM:
            document.querySelector('.courses').insertAdjacentHTML(
                'beforeend',
                `<section class="course">
                    <h2>${data[i].Code}: ${ data[i].Title }</h2>
                    <p>
                        ${ data[i].Days } &bull; ${ data[i].Location.FullLocation } &bull; ${data[i].Hours} credit hour(s)
                    </p>
                    <p><strong>${ instructor }</strong></p>
                </section>`
            );
        }
        i++;
    }

    // const searchTerm = document.querySelector('#search_term').value;
}