import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/components/config";
import { H2, LegalTitle, LI, P, UL } from "../components";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nexolabs",
  description:
    "Cómo Nexolabs recolecta, usa y protege los datos personales de quienes visitan el sitio o solicitan sus servicios.",
  robots: { index: true, follow: true },
};

const UPDATED = "16 de agosto de 2026";

export default function Privacidad() {
  return (
    <article>
      <LegalTitle updated={UPDATED}>Política de Privacidad</LegalTitle>

      <P>
        En Nexolabs tratamos los datos personales conforme a la Ley N.º 8968 de
        Protección de la Persona frente al tratamiento de sus datos personales de
        Costa Rica. Esta política explica qué datos recolectamos, para qué los
        usamos y qué derechos tienes sobre ellos.
      </P>

      <H2>1. Responsable</H2>
      <P>
        Nexolabs, domiciliada en Costa Rica, es responsable del tratamiento de
        los datos recolectados a través de nexolabs.tech y de sus canales de
        contacto. Para cualquier gestión sobre tus datos, escribe a{" "}
        {CONTACT_EMAIL}.
      </P>

      <H2>2. Qué datos recolectamos</H2>
      <UL>
        <LI>
          <strong className="text-slate-300">Formulario de contacto:</strong>{" "}
          nombre, empresa, correo electrónico, teléfono si lo proporcionas, área
          de interés, rango de presupuesto y el mensaje que escribas.
        </LI>
        <LI>
          <strong className="text-slate-300">Mensajería:</strong> si nos
          escribes por WhatsApp, tu número y el contenido de la conversación.
        </LI>
        <LI>
          <strong className="text-slate-300">Datos técnicos:</strong>{" "}
          información básica de navegación que generan los servidores donde está
          alojado el sitio.
        </LI>
      </UL>
      <P>
        No solicitamos datos sensibles ni información financiera a través del
        sitio.
      </P>

      <H2>3. Para qué los usamos</H2>
      <UL>
        <LI>Responder tu solicitud y darle seguimiento.</LI>
        <LI>Elaborar propuestas y prestar los servicios contratados.</LI>
        <LI>Cumplir obligaciones legales y contables.</LI>
        <LI>Mejorar el sitio y nuestros servicios.</LI>
      </UL>
      <P>
        No vendemos ni cedemos tus datos a terceros con fines comerciales. No te
        enviamos comunicaciones promocionales sin tu consentimiento previo.
      </P>

      <H2>4. Base para el tratamiento</H2>
      <P>
        Tratamos tus datos con tu consentimiento, otorgado al enviar el
        formulario o iniciar una conversación con nosotros, y para ejecutar la
        relación contractual cuando exista.
      </P>

      <H2>5. Con quién los compartimos</H2>
      <P>
        Solo con proveedores necesarios para operar, quienes los tratan bajo
        nuestras instrucciones:
      </P>
      <UL>
        <LI>Servicios de alojamiento y despliegue del sitio.</LI>
        <LI>Servicio de envío de correo del formulario de contacto.</LI>
        <LI>
          WhatsApp Business Platform, cuando el contacto ocurre por ese canal.
        </LI>
      </UL>
      <P>
        Algunos de estos proveedores están fuera de Costa Rica, por lo que puede
        existir transferencia internacional de datos bajo las garantías previstas
        en la normativa aplicable.
      </P>

      <H2>6. Cuánto tiempo los conservamos</H2>
      <P>
        Conservamos las solicitudes de contacto mientras exista una gestión
        activa y por el plazo razonable posterior para atender consultas
        relacionadas. Los datos vinculados a servicios contratados se conservan
        durante los plazos legales de orden contable y fiscal.
      </P>

      <H2>7. Tus derechos</H2>
      <P>
        Puedes solicitar en cualquier momento el acceso, la rectificación, la
        actualización, la eliminación de tus datos o revocar el consentimiento
        otorgado. Para ejercerlos escribe a {CONTACT_EMAIL} indicando tu
        solicitud. Responderemos dentro de los plazos que establece la ley.
      </P>
      <P>
        También puedes acudir a la Agencia de Protección de Datos de los
        Habitantes (PRODHAB) si consideras que tus derechos no fueron atendidos.
      </P>

      <H2>8. Seguridad</H2>
      <P>
        Aplicamos medidas técnicas y organizativas razonables para proteger la
        información contra acceso, pérdida o alteración no autorizados. Ningún
        sistema es completamente infalible, pero trabajamos para reducir ese
        riesgo.
      </P>

      <H2>9. Datos de nuestros clientes</H2>
      <P>
        Cuando implementamos soluciones que procesan datos de terceros por cuenta
        de un cliente, actuamos como encargados del tratamiento conforme a lo
        pactado en el contrato. El cliente sigue siendo el responsable de esos
        datos.
      </P>

      <H2>10. Cambios</H2>
      <P>
        Podemos actualizar esta política. La versión vigente es la publicada en
        esta página, con su fecha de última actualización.
      </P>

      <H2>11. Contacto</H2>
      <P>
        Para consultas sobre privacidad o para ejercer tus derechos, escribe a{" "}
        {CONTACT_EMAIL}.
      </P>
    </article>
  );
}
