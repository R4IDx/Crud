import styles from "./page2.module.css";
import React from 'react';
import Link from 'next/link';


export default function Home() {
  const myRef = React.createRef();
  const myRef1 = React.createRef();
  const myRef2 = React.createRef();
  const myRef3 = React.createRef();
  const myRef4 = React.createRef();
  const myRef5 = React.createRef();
  const myRef6 = React.createRef();
  const myRef7 = React.createRef();
  const myRef8 = React.createRef();
  const myRef9 = React.createRef();
  const myRef10 = React.createRef();
  const myRef11 = React.createRef();
  const myRef11joje1 = React.createRef();
  const myRef11joje2 = React.createRef();
  const myRef11joje3 = React.createRef();
  const myRef11joje4 = React.createRef();
  const myRefcc = React.createRef();


  const handleClick = () => {
    myRef.current.classList.add(styles.hidden);
  };

  const handleClick1 = (targetId) => {
    myRef1.current?.classList?.remove(styles.hidden);
    myRef2.current?.classList?.remove(styles.hidden);
    myRef11joje1.current?.classList?.remove(styles.hidden);
  };

  const jojego = (targetId) => {
    const targetElement0 = document.getElementById(targetId);
    if (targetElement0) {
      targetElement0.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID '${targetId}' not found.`);
    }
  };

  const handleClick2 = (targetId) => {
    myRef3.current?.classList?.remove(styles.hidden);
    myRef4.current?.classList?.remove(styles.hidden);
    myRef11joje2.current?.classList?.remove(styles.hidden);
  };

  const handleClick3 = (targetId) => {
    myRef5.current?.classList?.remove(styles.hidden);
    myRef6.current?.classList?.remove(styles.hidden);
    myRef11joje3.current?.classList?.remove(styles.hidden);
  };

  const handleClick4 = (targetId) => {
    myRef7.current?.classList?.remove(styles.hidden);
    myRef8.current?.classList?.remove(styles.hidden);
    myRef9.current?.classList?.remove(styles.hidden);
    myRef11joje4.current?.classList?.remove(styles.hidden);
  };

  const handleClick5 = (targetId) => {
    myRef10.current?.classList?.remove(styles.hidden);
    myRef11.current?.classList?.remove(styles.hidden);
    myRefcc.current?.classList?.remove(styles.hidden);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div ref={myRef} className={styles.bg}>
          <div id='tbt'>
            <section className={styles.header}>
              <h1>DIE REISE DURCH DEN VERDAUUNGSTRAKT</h1>
              <h3>Lerne in einer Reise durch das Verdauungssystem, deinen Körper kennen. Und Verstehe wie einzelne Prozesse im Körper dein Essen verdauen</h3>

            </section>
            <section className={styles.tfh}>
              <img alt='body_img' className={styles.bodyImg} src="/2s.png"/>
            </section>
            <section className={styles.banner}>
              <h3>Unsere erste Station führt uns zu Beginn in die Mundhöhle, scrolle weiter wenn du mehr erfahren möchtest</h3>

            </section>

            <section id="mund" className={styles.mund}>
              <div ref={myRef1} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  Nahrungs tritt durch den Mund in den Verdauungskanal. Es wird von den Zähnen zerkleinert und mit Speichel vermischt.
                  Der Speichel enthält Enzyme, die die Nahrung verdauen. Die Nahrung wird dann in den Rachen geschoben
                  und in die Speiseröhre transportiert.
                </p>
              </div>
              <button className={styles.goto} onClick={() => handleClick1('speiseröhre')}>
                <div onClick={()=>jojego('speiseröhre')} ref={myRef11joje1} className={`${styles.joje} ${styles.hidden}`}>
                  <a href="#" className="button button--piyo">
                    <div className="button__wrapper">
                      <span className="button__text"></span>
                    </div>
                    <div className="characterBox">
                      <div className="character wakeup">
                        <div className="character__face"></div>
                      </div>
                      <div className="character wakeup">
                        <div className="character__face"></div>
                      </div>
                      <div className="character">
                        <div className="character__face"></div>
                      </div>
                    </div>
                  </a>
                </div>
                Was passiert in der Mundhöhle? 
              </button>
              <p ref={myRef2} className={styles.hidden}> </p>
            </section>
            <section className={styles.banner}>
              <h3>Nun hast du erfahren welche Aufgabe die Mundhöhle erfüllt, lass uns weiter scrollen um zu erfahren wie es weiter geht</h3>

            </section>

            <section id="speiseröhre" className={styles.speiseröhre}>
              <div ref={myRef3} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  Das fibromuskuläre Rohr, das die Nahrung vom Rachen in den Magen transportiert. Die Speiseröhre ist etwa 25 cm lang und verläuft hinter der Luftröhre.
                  Die Nahrung wird mit einer wellenförmigen Bewegung, die als Peristaltik bezeichnet wird, in den Magen transportiert.
                </p>
              </div>
              <button className={styles.goto} onClick={() => handleClick2('magen')}>
                <div onClick={()=>jojego('magen')} ref={myRef11joje2} className={`${styles.joje} ${styles.hidden}`}>
                  <a href="#" className="button button--piyo">
                    <div className="button__wrapper">
                      <span className="button__text"></span>
                    </div>
                    <div className="characterBox">
                      <div className="character wakeup">
                        <div className="character__face"></div>
                      </div>
                      <div className="character wakeup">
                        <div className="character__face"></div>
                      </div>
                      <div className="character">
                        <div className="character__face"></div>
                      </div>
                    </div>
                  </a>
                </div>
                Zeige Infos der Speiseröhre! 
              </button>
              <p ref={myRef4} className={styles.hidden}></p>
            </section>
            <section className={styles.banner}>
              <h3>Nachdem wir nun auch erfahren haben welche Funktion die Speiseröhre hat, ist unsere nächste Station der Magen</h3>

            </section>

            <section id="magen" className={styles.magen}>
              <div ref={myRef5} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  Der Magen ist das muskulöse Organ, das die Nahrung aufnimmt und verdaut. Der Magen hat die Form eines J-förmigen Beutels und liegt im oberen Bauchbereich.
                  Nahrung wird im Magen gespeichert und durchmischt, bevor sie in den Dünndarm gelangt. Der Magen sezerniert Magensäure und Enzyme, die die Nahrung verdauen.
                </p>
              </div>
              <button className={styles.goto} onClick={() => handleClick3('dünndarm')}>
                <div onClick={()=>jojego('dünndarm')} ref={myRef11joje3} className={`${styles.joje} ${styles.hidden}`}>
                  <a href="#" className="button button--piyo">
                    <div className="button__wrapper">
                      <span className="button__text"></span>
                    </div>
                    <div className="characterBox">
                      <div className="character wakeup">
                        <div className="character__face"></div>
                      </div>
                      <div className="character wakeup">
                        <div className="character__face"></div>
                      </div>
                      <div className="character">
                        <div className="character__face"></div>
                      </div>
                    </div>
                  </a>
                </div>
                Was tut der Magen?
              </button>
              <p ref={myRef6} className={styles.hidden}></p>
            </section>
            <section className={styles.banner}>
              <h3>Unsere Nahrung hat sich auf unserem bisherigen Weg nun schon wesentlich verändert.</h3>

            </section>

            <section id="dünndarm" className={styles.dünndarm}>
              <div ref={myRef7} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  Der Dünndarm ist das längste Segment des Verdauungstrakts und besteht aus drei Abschnitten: Duodenum, Jejunum und Ileum. Der Dünndarm ist der Hauptort für die Verdauung und Absorption von Nährstoffen.
                  Der Dünndarm absorbiert die Nährstoffe aus der Nahrung und leitet sie in den Blutkreislauf. Der Dünndarm ist mit einer Vielzahl von Enzymen und Galle bedeckt, die die Nahrung verdauen.
                </p>
                <p>
                  Der Dickdarm ist der vorletzte Abschnitt des Verdauungstrakts. Der Dickdarm ist etwa 15 cm lang und verbindet den Dünndarm mit dem Enddarm. Der Dickdarm ist der Hauptort für die Absorption von Wasser und Salzen.
                  Der Dickdarm enthält Bakterien, die die Nahrung verdauen und die Nährstoffe in den Blutkreislauf leiten. Der Dickdarm speichert den Stuhl, bis er ausgeschieden wird.
                </p>
              </div>
              <button className={styles.goto} onClick={() => handleClick4('enddarm')}>
                <div onClick={()=>jojego('enddarm')} ref={myRef11joje4} className={`${styles.joje} ${styles.hidden}`}>
                  <a href="#" className="button button--piyo">
                    <div className="button__wrapper">
                      <span className="button__text"></span>
                    </div>
                    <div className="characterBox">
                      <div className="character wakeup">
                        <div className="character__face"></div>
                      </div>
                      <div className="character wakeup">
                        <div className="character__face"></div>
                      </div>
                      <div className="character">
                        <div className="character__face"></div>
                      </div>
                    </div>
                  </a>
                </div>
                Dünndarm? Dickdarm? was ist das ? 
              </button>
              <p ref={myRef9} className={styles.hidden}></p>
              <p ref={myRef8} className={styles.hidden}></p>
            </section>
            <section className={styles.banner}>
              <h3>Im Dickdarm wurden unserer Nahrung alle restlichen Nährstoffe entzogen, nun folgt der Enddarm</h3>

            </section>

            <section id="enddarm" className={styles.enddarm}>
              <div ref={myRef10} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  Der Enddarm ist der letzte Abschnitt des Verdauungstrakts. Der Enddarm ist etwa 15 cm lang und verbindet den Dickdarm mit dem Anus.
                   Der Enddarm speichert den Stuhl, bis er ausgeschieden wird. Der Enddarm hat zwei Schließmuskeln, die den Stuhl im Enddarm halten.
                </p>
              </div>
              <button className={styles.goto} onClick={() => handleClick5('mund')}>
                Was passiert mit dem Rest? 
              </button>
              
            </section>
            <section className={styles.bannerend}>
              <h3>Unsere Nahrung wurde erfolgreich Verdaut. Wenn du nun zu einem bestimmten Punkt springen möchtest Klicke einfach auf einen der Button</h3>

            </section>
            <section>
              <div ref={myRefcc} className={`${styles.buttonContainer} ${styles.hidden}`}>
                <button onClick={()=>jojego('mund')} className={styles.button22}>Mund</button>
                <button onClick={()=>jojego('speiseröhre')} className={styles.button22}>Speiseröhre</button>
                <button onClick={()=>jojego('magen')} className={styles.button22}>Magen</button>
                <button onClick={()=>jojego('dünndarm')} className={styles.button22}>Dünndarm</button>
              </div>
            </section>
            

            <div className={styles.part2}>
              <h1 style={{color:'rgb(110, 110, 110)'}}>ZUSAMMENFASSUNG</h1>
              <div className={styles.row}>
                <div className={styles.bigbox} >
                  <h5>Was ist in der Mundhöhle passiert</h5>
                  <ul>
                    <li>Bissen: Du nimmst den Speisebrocken mit deinem Zahn in den Mund.</li>
                    <li>Kauen: Die Zähne zerkleinern den Speisebrocken in ein sauerstoffreiches Medium, das Saliva.</li>
                    <li>Sieden: Die Enzyme in der Saliva (z.B. Amylase) brechen die Nahrungsbestandteile (z.B. Stärke, Kohlenhydrate) in simpler Formen auf.</li>
                  </ul>
                  <h5>Was ist im Dünn/Dickdarm passiert</h5>
                  <ul>
                    <li>Wasser und Nährstoffe aus dem Essen werden aufgenommen, Nährstoffe werden in den Blutkreislauf übertragen</li>
                  </ul>
                </div>
                <div className={styles.bigbox} >
                  <h5>Was ist in der Speiseröhre/Magen passiert</h5>
                  <ul>
                    <li>Essen wird von der Mundhöhle in die Speiseröhre geschluckt.</li>
                    <li>Essen wird nach unten befördert durch peristaltische Bewegungen.</li>
                  </ul>
                  <h5>Und was bleibt übrig ?</h5>
                  <ul>
                    <li>Nach dem Verdauungsprozess im Magen und Dünndarm:</li>
                    <li>Nährstoffe werden in den Blutkreislauf aufgenommen</li>
                    <li>Energie wird für den Körper verwendet</li>
                  </ul>
                </div>
              </div>
              <div className={styles.boxPart2}>
                <h4>Sieh dir unsere Food Datenbank an und erfahre Nährwerte zu vielen Lebensmitteln</h4>
              </div>
              <Link href="/page">Food Datenbank</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}