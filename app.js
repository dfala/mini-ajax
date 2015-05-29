/// GET USERS
$('#getUsers').click(function () {
	getData();
})


var getData = function () {
	$.ajax({
		url: 'http://reqr.es/api/users?page=1',
		success: function (response) {
			console.log('this is reponse', response);
			addData(response);
		}
	})
}


var addData = function (response) {
	var data = response.data;

	data.forEach(function (user, index) {
		displayUser(user, index);
	})
}

var displayUser = function (user, index) {
	console.log(user, index);

  $('#userInfo' + (index + 1)).html('<div>' +
    'User Info:' +
    '<li>' +
    'First name: ' + user.first_name +
    '</li>' +
    '<li>' +
    'Last name: ' + user.last_name +
    '</li>' +
    '<hr>' +
    '</div>'
  )
}

/// ADD USERS
$('#addUser').click(function (e) {
	e.preventDefault();

	var name = $('#name').val();
	var job = $('#job').val();

	var user = {
		name: name,
		job: job
	}

	addUser(user);
})

var addUser = function (user) {
	$.ajax({
		url: 'http://reqr.es/api/users?page=1',
		method: 'POST',
		data: user,
		success: function (res) {
			$('#recentUser').html(
	          '<li>' +
	            'name: ' + res.name +
	          '</li>' +
	          '<li>' +
	            'job: ' + res.job +
	          '</li>' +
	          '<li>' +
	            'id: ' + res.id +
	          '</li>' +
	          '<li>' +
	            'created at: ' + res.createdAt +
	          '</li>'
	        )
		}
	})
}

