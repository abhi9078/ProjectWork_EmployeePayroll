window. addEventListener('DOMContentLoaded', (event) => {

   myfunc();
});

let myfunc=()=>{
    
    let last=`
    <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td class="profile"><img class="profile" alt=""
                    src="images/profile2.png">
            </td>
            <td>Abhilash Meher</td>
            <td>Male</td>
            <td><div class="dept-label">HR</div>
            <div class="dept-label">Finance</div></td>
            <td>4000000</td>
            <td>20 February 2022</td>
            <td>
            <img name="1" onclick="remove(this)" alt="delete"
                src="images/delete.png">
            <img name="1"  alt="edit" onclick="update(this)"
                src="images/edit.png">
            </td>
          </tr>
    `;
   document.querySelector('#table-display').innerHTML=last;
}
