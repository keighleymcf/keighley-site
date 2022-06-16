import React from "react";
import styled from "styled-components";

import { Text } from "../../ui/Text";
import { ExternalLink } from "src/components/ui/Link";

const ImpressumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-wrap: break-all;
  word-break: break-word;
`;

const ImpressumSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Impressum = () => (
  <ImpressumContainer>
    <Text variant="h2">Impressum / Legal Disclosure</Text>
    <ImpressumSection id="contact-impressum">
      <Text variant="h3">Contact Information</Text>
      <Text variant="p">Keighley McFarland</Text>
      <Text variant="p">Vienna, Austria</Text>
      <Text variant="p">
        E-Mail:{" "}
        <ExternalLink
          hideUnderline
          arrow
          href="mailto:contact@keighleymcfarland.me"
        >
          contact@keighleymcfarland.me
        </ExternalLink>
      </Text>
      <Text variant="p">
        Internet address:{" "}
        <ExternalLink
          hideUnderline
          arrow
          href="https://www.keighleymcfarland.me"
          rel="noopener noreferrer"
        >
          www.keighleymcfarland.me
        </ExternalLink>
      </Text>
    </ImpressumSection>
    <ImpressumSection id="terms-disclaimer">
      <Text variant="h3">Haftung für Inhalte dieser Webseite</Text>
      <Text variant="p">
        Ich entwickele die Inhalte dieser Webseite ständig weiter und bemühen
        mich korrekte und aktuelle Informationen bereitzustellen. Leider kann
        ich keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite
        übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden.
      </Text>
      <Text variant="p">
        Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte
        ich Sie mich umgehend zu kontaktieren, Sie finden die Kontaktdaten im
        Impressum.
      </Text>
      <Text variant="h3">Haftung für Links auf dieser Webseite</Text>
      <Text variant="p">
        Meine Webseite enthält Links zu anderen Webseiten für deren Inhalt ich
        nicht verantwortlich bin. Haftung für verlinkte Websites besteht laut §
        17 ECG für mich nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten
        hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht
        aufgefallen sind und wir Links sofort entfernen würden, wenn uns
        Rechtswidrigkeiten bekannt werden.
      </Text>
      <Text variant="p">
        Wenn Ihnen rechtswidrige Links auf meiner Website auffallen, bitte ich
        Sie mich zu kontaktieren, Sie finden die Kontaktdaten im Impressum.
      </Text>
      <Text variant="h3">Urheberrechtshinweis</Text>
      <Text variant="p">
        Alle Inhalte und das Design dieser Webseite (Interface, Bilder, Fotos,
        Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werde ich
        die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
        verfolgen.
      </Text>
      <Text variant="h3">EU-Streitschlichtung</Text>
      <Text variant="p">
        Gemäß Verordnung über Online-Streitbeilegung in
        Verbraucherangelegenheiten (ODR-Verordnung) möchte ich Sie über die
        Online-Streitbeilegungsplattform (OS-Plattform) informieren. Verbraucher
        haben die Möglichkeit, Beschwerden an die Online
        Streitbeilegungsplattform der Europäischen Kommission unter
        http://ec.europa.eu/odr?tid=221130917 zu richten. Die dafür notwendigen
        Kontaktdaten finden Sie oberhalb im Impressum.
      </Text>
      <Text variant="p">
        Ich möchte Sie jedoch darauf hinweisen, dass ich nicht bereit oder
        verpflichtet sind, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </Text>
    </ImpressumSection>
    <ImpressumSection id="datenschutzerklaerung">
      <Text variant="h2">Datenschutzerklärung</Text>
      <Text variant="h3">Datenschutz</Text>
      <Text variant="p">
        Ich habe diese Datenschutzerklärung (Fassung 19.10.2021) verfasst, um
        Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679
        zu erklären, welche Informationen ich sammele, wie ich Daten verwende
        und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite
        haben.
      </Text>
      <Text variant="h3">Automatische Datenspeicherung</Text>
      <Text variant="p">
        Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen
        automatisch erstellt und gespeichert, so auch auf dieser Webseite.
      </Text>
      <Text variant="p">
        Wenn Sie meine Webseite so wie jetzt gerade besuchen, speichert mein
        Webserver (Service auf dem diese Webseite gespeichert ist) automatisch
        Daten wie
      </Text>
      <ul>
        <li>die Adresse (URL) der aufgerufenen Webseite</li>
        <li>Browser und Browserversion</li>
        <li>das verwendete Betriebssystem</li>
        <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
        <li>
          den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen
          wird
        </li>
        <li>Datum und Uhrzeit</li>
        <li>in Dateien (Webserver-Logfiles).</li>
      </ul>
      <Text variant="p">
        In der Regel werden Webserver-Logfiles mittelfristig gespeichert und
        danach automatisch gelöscht. Ich gebe diese Daten nicht weiter, kann
        jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
        rechtswidrigem Verhalten eingesehen werden.
      </Text>
      {/* <Text variant="h3">Cookies</Text>
      <Text variant="p">Unsere Webseite verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.</Text>
      <Text variant="p">
        Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.
      </Text>
      <Text variant="p">
        Was genau sind Cookies?
      </Text>
      <Text variant="p">
        Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
      </Text>
      <Text variant="p">
        Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Webseite auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem „Hirn“ Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
      </Text>
      <Text variant="p">
        Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Webseite, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.
      </Text>
      <Text variant="p">
        Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.
      </Text>
      <Text variant="p">
        Wie kann ich Cookies löschen?
      </Text>
      <Text variant="p">
        Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Webseite die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.
      </Text>
      <Text variant="p">
        Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden.
      </Text>
      <Text variant="p">
        Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder „Cookies deaktivieren Chrome“ im Falle eines Chrome Browsers.
      </Text>
      <Text variant="p">
        Wie sieht es mit meinem Datenschutz aus?
      </Text>
      <Text variant="p">
        Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes (TKG).
      </Text>
      <Text variant="p">
        Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen wir https://tools.ietf.org/html/rfc6265, dem Request for Comments der Internet Engineering Task Force (IETF) namens „HTTP State Management Mechanism“.
      </Text> */}
      <Text variant="h3">Speicherung persönlicher Daten</Text>
      <Text variant="p">
        Persönliche Daten, die Sie mir auf dieser Website elektronisch
        übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere
        persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder
        Kommentaren im Blog, werden von mir gemeinsam mit dem Zeitpunkt und der
        IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt
        und nicht an Dritte weitergegeben.
      </Text>
      <Text variant="p">
        Ich nutze Ihre persönlichen Daten somit nur für die Kommunikation mit
        jenen Besuchern, die Kontakt ausdrücklich wünschen und für die
        Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und
        Produkte. Ich gebe Ihre persönlichen Daten ohne Zustimmung nicht weiter,
        kann jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
        rechtswidrigem Verhalten eingesehen werden.
      </Text>
      <Text variant="p">
        Wenn Sie mir persönliche Daten per E-Mail schicken – somit abseits
        dieser Webseite – kann ich keine sichere Übertragung und den Schutz
        Ihrer Daten garantieren. Ich empfehlen Ihnen, vertrauliche Daten niemals
        unverschlüsselt per E-Mail zu übermitteln.
      </Text>
      <Text variant="h3">Rechte laut Datenschutzgrundverordnung</Text>
      <Text variant="p">
        Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen
        Datenschutzgesetzes (DSG) grundsätzlich die folgende Rechte zu:
      </Text>
      <ul>
        <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
        <li>
          Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)
        </li>
        <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
        <li>
          Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit
          der Berichtigung oder Löschung personenbezogener Daten oder der
          Einschränkung der Verarbeitung (Artikel 19 DSGVO)
        </li>
        <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
        <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
        <li>
          Recht, nicht einer ausschließlich auf einer automatisierten
          Verarbeitung — einschließlich Profiling — beruhenden Entscheidung
          unterworfen zu werden (Artikel 22 DSGVO)
        </li>
      </ul>
      <Text variant="p">
        Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
        Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
        sonst in einer Weise verletzt worden sind, können Sie sich bei der
        Aufsichtsbehörde beschweren, welche in Österreich die Datenschutzbehörde
        ist, deren Webseite Sie unter https://www.dsb.gv.at/ finden.
      </Text>
      <Text variant="h3">TLS-Verschlüsselung mit https</Text>
      <Text variant="p">
        Ich verwende https um Daten abhörsicher im Internet zu übertragen
        (Datenschutz durch Technikgestaltung Artikel 25 Absatz 1 DSGVO). Durch
        den Einsatz von TLS (Transport Layer Security), einem
        Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet kann
        ich den Schutz vertraulicher Daten sicherstellen. Sie erkennen die
        Benutzung dieser Absicherung der Datenübertragung am kleinen
        Schlosssymbol links oben im Browser und der Verwendung des Schemas https
        (anstatt http) als Teil unserer Internetadresse.
      </Text>

      <Text variant="h4">
        Datenschutzerklärung: Kontakt via Kontaktformular oder E-mail
      </Text>
      <Text variant="h3">Personenbezogene Daten</Text>
      <Text variant="p">
        Im Rahmen der Kontaktaufnahme mit mir (z.B. per Kontaktformular oder
        E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle
        eines Kontaktformulars erhoben werden, ist aus dem jeweiligen
        Kontaktformular ersichtlich. Diese sind:
      </Text>
      <ul>
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>Nachricht</li>
      </ul>
      <Text variant="h3">Zweck der Datenverarbeitung</Text>
      <Text variant="p">
        Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres
        Anliegens bzw. für die Kontaktaufnahme und die damit verbundene
        technische Administration, Fehleranalyse und Ursachenforschung
        gespeichert und verwendet.
      </Text>
      <Text variant="h3">Rechtsgrundlage</Text>
      <Text variant="p">
        Rechtsgrundlage für die Verarbeitung der Daten ist unser berechtigtes
        Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1(a) der
        DSGVO.
      </Text>
      <Text variant="h3">Speicherdauer</Text>
      <Text variant="p">
        Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage oder
        abgeschlossener Fehleranalyse und Ursachenforschung gelöscht, dies ist
        der Fall, wenn sich aus den Umständen entnehmen lässt, dass der
        betroffene Sachverhalt abschließend geklärt ist und sofern keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </Text>
      <Text variant="h3">Empfänger der Daten</Text>
      <Text variant="p">
        EmailJS, HaGat Street 19, Ramat Gan, 5260327, Israel
      </Text>
      <Text variant="p">
        Ein Datenverarbeitungsvertrag („Data-Processing-Agreement“) auf Basis
        der Standardvertragsklauseln der Europäischen Kommission ist Bestandteil
        der Datenschutzerklärung von EmailJS. Dieser Datenverarbeitungsvertrag
        kann bei Interesse unter nachstehender Internetadresse eingesehen
        werden:
        <ExternalLink
          hideUnderline
          arrow
          href="https://www.emailjs.com/legal/gdrp-compliant/"
        >
          https://www.emailjs.com/legal/gdrp-compliant/
        </ExternalLink>
      </Text>
      <Text variant="p">
        Die Datenschutzbestimmungen von EmailJS können Sie hier einsehen:
        <ExternalLink
          hideUnderline
          arrow
          href="https://www.emailjs.com/legal/privacy-policy/"
        >
          https://www.emailjs.com/legal/privacy-policy/
        </ExternalLink>
      </Text>
    </ImpressumSection>
    <Text variant="p">
      Quelle: Erstellt mit dem{" "}
      <ExternalLink
        hideUnderline
        arrow
        href="https://www.firmenwebseiten.at/impressum-generator/"
      >
        Datenschutz Generator von firmenwebseiten.at
      </ExternalLink>
      .
    </Text>
  </ImpressumContainer>
);
