import styles from "./Page2.module.css";
import Navbar from './navbar';
import React from 'react';


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
        <div>
          <Navbar />
        </div>
        <div ref={myRef} className={styles.bg}>
          <div id='tbt'>
            <section className={styles.tfh}>
              <img alt='body_img' className={styles.bodyImg} src="/2s.png"/>
            </section>

            <section id="mund" className={styles.mund}>
              <div ref={myRef1} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  11111111111111Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu
                  felis, lorem molestie. Ornare non nibh at duis nec vitae nisi semper
                  duis. Id sapien egestas sit sit consequat. Aliquam lectus nunc
                  pellentesque molestie ultrices elit suspendisse pellentesque. Volutpat
                  ut fusce massa viverra sapien pulvinar rhoncus ullamcorper.
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
                Beschreibung anzeigen 
              </button>
              <p ref={myRef2} className={styles.hidden}> </p>
            </section>

            <section id="speiseröhre" className={styles.speiseröhre}>
              <div ref={myRef3} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  22222222222222Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu
                  felis, lorem molestie. Ornare non nibh at duis nec vitae nisi semper
                  duis. Id sapien egestas sit sit consequat. Aliquam lectus nunc
                  pellentesque molestie ultrices elit suspendisse pellentesque. Volutpat
                  ut fusce massa viverra sapien pulvinar rhoncus ullamcorper.
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
                Beschreibung anzeigen 
              </button>
              <p ref={myRef4} className={styles.hidden}></p>
            </section>

            <section id="magen" className={styles.magen}>
              <div ref={myRef5} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu
                  felis, lorem molestie. Ornare non nibh at duis nec vitae nisi semper
                  duis. Id sapien egestas sit sit consequat. Aliquam lectus nunc
                  pellentesque molestie ultrices elit suspendisse pellentesque. Volutpat
                  ut fusce massa viverra sapien pulvinar rhoncus ullamcorper.
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
                Beschreibung anzeigen 
              </button>
              <p ref={myRef6} className={styles.hidden}></p>
            </section>

            <section id="dünndarm" className={styles.dünndarm}>
              <div ref={myRef7} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu
                  felis, lorem molestie. Ornare non nibh at duis nec vitae nisi semper
                  duis. Id sapien egestas sit sit consequat. Aliquam lectus nunc
                  pellentesque molestie ultrices elit suspendisse pellentesque. Volutpat
                  ut fusce massa viverra sapien pulvinar rhoncus ullamcorper.
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
                Beschreibung anzeigen 
              </button>
              <p ref={myRef9} className={styles.hidden}></p>
              <p ref={myRef8} className={styles.hidden}></p>
            </section>

            <section id="enddarm" className={styles.enddarm}>
              <div ref={myRef10} className={`${styles.box} ${styles.hidden}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eu
                  felis, lorem molestie. Ornare non nibh at duis nec vitae nisi semper
                  duis. Id sapien egestas sit sit consequat. Aliquam lectus nunc
                  pellentesque molestie ultrices elit suspendisse pellentesque. Volutpat
                  ut fusce massa viverra sapien pulvinar rhoncus ullamcorper.
                </p>
              </div>
              <button className={styles.goto} onClick={() => handleClick5('mund')}>
                Beschreibung anzeigen 
              </button>
              
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
              <h4 style={{color:'#A99C24'}}>Zusammenfassung</h4>
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
                <h4>Try our food database if you want to learn more about nutrients</h4>
              </div>
              <a href="/page">Food Database</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}