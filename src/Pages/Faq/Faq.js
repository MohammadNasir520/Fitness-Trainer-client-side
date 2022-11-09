import { Accordion } from "flowbite-react";
import React from "react";
import useTittle from "../../Hooks/Hooks";

const Faq = () => {
  useTittle('Faq');
  
  return (
    <div>

        <h1 className="text-center font-bold text-xl my-7">Some Basiq Faq</h1>

      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>What is JWt and how does it works?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP)
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Difference between SQL and NoSQL?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            What is the difference between javascript and NodeJS?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
           
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
