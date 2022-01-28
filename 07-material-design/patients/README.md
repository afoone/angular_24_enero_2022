
REST :

GET, POST, PUT, DELETE, PATCH

Idempotentes: GET, PUT, DELETE
No Idempotentes: POST, PATCH

Una operación es idempotentente cuando si se ejecuta varias veces, el estado final es el mismo que ejecutándola una sola vez

Endpoint que identifica nuestro recurso: /patients

GET /patients -> lista de los pacientes /patients?q=alfredo /patients?page=1 /patients?items=20&offset=30
GET /patients/1 -> devuelve el paciente número 1

POST /patients -> Añadir un nuevo paciente (el paciente va en json en el body) no lleva id, me lo asigna el servidor

PUT /patients/1 -> Sustituye el paciente con los datos que le envío

DELTE /patients/1 -> Borra el paciente 1

PATCH /patients/1 -> Actualizar la información de el paciente 1 - está pensada para ser no idempotente



==========


# PIPES

lowercase: string en minusculas
uppercase: string en mayúsculas
decimal:
  m.a-b

  m: mínimo de enteros
  a: número mínimo de decimales
  b: número máximo de decimales

   {{6.300008320302 | number: '2.4-4' }}

 date:  

           <!-- {{ date | date : "fullDate" }} -->
          <!-- {{date | date: "dd-MM-yyyy hh:mm:ss"}} -->

currency:
  {{patient.age | currency:"EUR":"symbol":"2.2-2"}}
 
