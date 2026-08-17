import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/components/config";
import { H2, LegalTitle, LI, P, UL } from "../components";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Nexolabs",
  description:
    "Términos y condiciones de uso del sitio y de los servicios de Nexolabs.",
  robots: { index: true, follow: true },
};

const UPDATED = "16 de agosto de 2026";

export default function Terminos() {
  return (
    <article>
      <LegalTitle updated={UPDATED}>Términos y Condiciones</LegalTitle>

      <P>
        Estos términos regulan el acceso y uso del sitio web nexolabs.tech y la
        contratación de los servicios ofrecidos por Nexolabs. Al usar el sitio o
        solicitar nuestros servicios, aceptas lo aquí descrito.
      </P>

      <H2>1. Quiénes somos</H2>
      <P>
        Nexolabs es una empresa domiciliada en Costa Rica dedicada a la
        automatización de procesos con inteligencia artificial y a servicios de
        arquitectura, ingeniería y análisis de datos. Para cualquier consulta
        sobre estos términos puedes escribir a {CONTACT_EMAIL}.
      </P>

      <H2>2. Uso del sitio</H2>
      <P>
        El contenido de este sitio se ofrece con fines informativos. Te
        comprometes a usarlo de forma lícita y a no realizar acciones que puedan
        dañarlo, sobrecargarlo o afectar su funcionamiento, incluyendo el envío
        automatizado de formularios o el acceso no autorizado a sus sistemas.
      </P>

      <H2>3. Solicitudes de contacto</H2>
      <P>
        El formulario de contacto y los canales de mensajería habilitados sirven
        para solicitar información. Enviar una solicitud no genera obligación
        contractual para ninguna de las partes ni garantiza la prestación del
        servicio.
      </P>
      <P>
        Te comprometes a proporcionar información veraz. Si escribes en nombre de
        una empresa, declaras contar con autorización para hacerlo.
      </P>

      <H2>4. Prestación de servicios</H2>
      <P>
        Cada proyecto se rige por una propuesta o contrato específico donde se
        detallan alcance, entregables, plazos, precio y condiciones de pago. En
        caso de contradicción entre esa propuesta y estos términos, prevalece la
        propuesta.
      </P>
      <UL>
        <LI>
          El alcance acordado puede modificarse solo por acuerdo escrito entre
          las partes.
        </LI>
        <LI>
          Los plazos estimados dependen de que el cliente entregue a tiempo los
          accesos, datos e información necesarios.
        </LI>
        <LI>
          Los servicios se prestan de forma profesional y diligente, sin que ello
          constituya garantía de resultados comerciales específicos.
        </LI>
      </UL>

      <H2>5. Servicios y plataformas de terceros</H2>
      <P>
        Nuestras soluciones pueden integrarse con plataformas de terceros como
        WhatsApp Business Platform, proveedores de modelos de inteligencia
        artificial, sistemas de punto de venta o servicios en la nube. El uso de
        esas plataformas está sujeto a sus propios términos y tarifas, que el
        cliente asume de forma directa salvo pacto distinto.
      </P>
      <P>
        No respondemos por interrupciones, cambios de política, modificaciones de
        precio o suspensiones originadas por esos terceros.
      </P>

      <H2>6. Sobre los resultados de la inteligencia artificial</H2>
      <P>
        Los sistemas basados en modelos de lenguaje pueden generar respuestas
        imprecisas. Diseñamos los flujos con controles y puntos de escalamiento a
        personas, pero el cliente es responsable de definir qué decisiones se
        automatizan y de supervisar la operación conforme a lo acordado.
      </P>

      <H2>7. Propiedad intelectual</H2>
      <P>
        La marca, el diseño y el contenido de este sitio pertenecen a Nexolabs.
        Los desarrollos hechos a la medida se rigen por lo pactado en cada
        contrato. Salvo acuerdo en contrario, conservamos la titularidad de
        nuestras metodologías, componentes reutilizables y conocimiento previo.
      </P>
      <P>
        Los datos del cliente y la información de su negocio son y siguen siendo
        del cliente.
      </P>

      <H2>8. Confidencialidad</H2>
      <P>
        Toda información no pública que conozcamos durante un proyecto se trata
        como confidencial y se usa únicamente para prestar el servicio. Esta
        obligación se mantiene después de terminada la relación.
      </P>

      <H2>9. Limitación de responsabilidad</H2>
      <P>
        En la medida permitida por la ley, nuestra responsabilidad se limita al
        monto efectivamente pagado por el servicio del que derive el reclamo. No
        respondemos por daños indirectos, lucro cesante ni pérdida de datos
        atribuible a causas ajenas a nuestro control.
      </P>

      <H2>10. Protección de datos</H2>
      <P>
        El tratamiento de datos personales se rige por nuestra Política de
        Privacidad y por la Ley N.º 8968 de Protección de la Persona frente al
        tratamiento de sus datos personales y su reglamento.
      </P>

      <H2>11. Cambios en estos términos</H2>
      <P>
        Podemos actualizar estos términos. La versión vigente es siempre la
        publicada en esta página, con su fecha de última actualización. Los
        cambios no afectan proyectos ya contratados.
      </P>

      <H2>12. Ley aplicable</H2>
      <P>
        Estos términos se rigen por las leyes de la República de Costa Rica.
        Cualquier controversia se someterá a los tribunales competentes de Costa
        Rica, salvo que exista acuerdo distinto en el contrato del proyecto.
      </P>

      <H2>13. Contacto</H2>
      <P>
        Para consultas sobre estos términos escribe a {CONTACT_EMAIL}.
      </P>
    </article>
  );
}
