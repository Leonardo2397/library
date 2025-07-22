import { Alert } from "react-bootstrap";

const Welcome = function() {
    return(
        <div className="mt-4 mb-5 text-center">
<Alert variant="success">
    <Alert.Heading>Benvenuto nel nostro shop</Alert.Heading>
  <p>
          Scopri le ultime offerte e i prodotti più venduti. Siamo felici di
          averti qui!
        </p>
</Alert>

<h5 className="text-muted">La tua destinazione per lo shopping online</h5>
        </div>
    )
}

export default Welcome