import db from '../../config/config'

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      handleGetRequest(req, res);
      break;
    case 'POST':
      handlePostRequest(req, res);
      break;
    case 'PUT':
      handlePutRequest(req, res);
      break;
    case 'DELETE':
      handleDeleteRequest(req, res);
      break;
    default:
      res.status(400).send('Invalid HTTP method');
      break;
  }
}

function handleGetRequest(req, res) {
  db.getConnection(function (err, connection) {
    if (err) {
      throw err;
    }
   
    
    // const id = req.query.id;
    // if (id) {
    //   connection.query('SELECT * FROM contact WHERE id = ?', [id], function (error, results, fields) {
    //     if (error) throw error;
        

    //     res.status(200).json(results);
    //     connection.release();
    //   });
    // } else {
    //   connection.query('SELECT * FROM contact', function (error, results, fields) {
    //     if (error) throw error;
    //     res.status(200).json(results);

    //     connection.release();
    //   });
    // }
  });
}

function handlePostRequest(req, res) {
  db.getConnection(function (err, connection) {
    if (err) {
      throw err;
    }

    const values = [
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.message
    ];
    console.log(`values: ${values}`);
    const q = "INSERT INTO contact(`name`, `email`, `phone`, `message`) VALUES (?)";
    connection.query(q, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.status(200).json("Thank you for choosing us for your web development needs. We will be in touch with you soon.");
    });
  });
}

function handlePutRequest(req, res) {
  db.getConnection(function (err, connection) {
    if (err) {
      throw err;
    }
    console.log('Connected to database');

    const { id, name, email } = req.body;

    connection.query('UPDATE contact SET name = ?, email = ? WHERE id = ?', [name, email, id], function (error, results, fields) {
      if (error) throw error;

      // Send a success response back to the client
      res.status(200).send(`Successfully updated record with id ${id}`);

      // Release the connection when you're done with it
      connection.release();
    });
  });
}

function handleDeleteRequest(req, res) {
  db.getConnection(function (err, connection) {
    if (err) {
      throw err;
    }
    console.log('Connected to database');

    const id = req.query.id;

    connection.query('DELETE FROM contact WHERE id = ?', [id], function (error, results, fields) {
      if (error) throw error;

      // Send a success
    }
  )}
  )}