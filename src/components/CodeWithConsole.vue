<template>
    
    <Splitter layout="horizontal" style="height: 75vh;">
        <SplitterPanel :size="40">
            <ScrollPanel class="h-full">
                <div class="container-fluid p-4 bg-body-tertiary rounded">
                    <!-- Text -->
                    <p class="lh-base fw-light py-4">
                        In diesem Kapitel werden die Bestandteile und Syntax von Python erklärt. 
                    </p>
                    <p class="lh-base fw-light py-4">
                        <u>Welche Bestandteile gibt es in der Programmiersprache Python?</u>
                        <br><br>
                        <b>Variablen</b> in der Programmierung sind Behälter, die Werte speichern können. Sie müssen in Python mit einem Namen und einem Datentyp deklariert werden. Variablen werden häufig verwendet, um Daten zu speichern und zwischen verschiedenen Teilen des Programms zu teilen.
                        <br><br>
                        <b>Datentypen</b> werden auf Variablen angewendet, um zu definieren, welche Art von Daten in der Variablen gespeichert werden soll. Jeder Datentyp repräsentiert eine bestimmte Art von Daten, wie z.B. ganze Zahlen, Fließkommazahlen oder Text. Datentypen in Python machen Programme effizienter, indem sie Daten auf unterschiedliche Weise behandeln und im Speicher speichern. Sie sind wichtig, um sicherzustellen, dass Programme korrekt funktionieren und die erwarteten Ergebnisse liefern.
                        <br><br>
                        <b>Operatoren</b> in Python sind Symbole, die verwendet werden, um Aktionen auf Daten auszuführen.Es gibt verschiedene Arten von Operatoren in Python. <u>Zuweisungsoperatorenwerden</u> verwendet, um einem Variablenwert einen neuen Wert zuzuweisen(z.B: „x=3“). Es gibt auch erweiterte Zuweisungsoperatoren, die den aktuellen Wert einer Variable mit einem anderen Wert addieren und das Ergebnis der Variable zuweisen(z.B.: "+="). <u>Vergleichsoperatorenwerden</u> verwendet, um zwei Werte miteinander zu vergleichen und zu überprüfen, ob sie gleich, größer oder kleiner sind.Dabei kann zum Beispiel überprüft werden, ob zwei Werte gleich sind (z.B.: „x==3“).Als Ergebnis wird ein Wahrheitswert (True oder False“)ausgegeben. 
                        <br><br>
                        <b>Kontrollstrukturen</b> in Python sind Anweisungen, die es dem Programm ermöglichen, Entscheidungen zu treffen und den Ablauf des Codes zu steuern. Sie helfen dabei, Bedingungen zu überprüfen, Schleifen auszuführen und Funktionen aufzurufen.Eine typische Kontrollstruktur ist die if-else-Anwendung, die es ermöglicht, Bedingungen zu prüfen und Code basierend auf dem Ergebnisder Bedingungsprüfung auszuführen.
                        <br><br>
                        <b>Module</b> in Python sind Sammlungen von Funktionen und Variablen, die in anderen Python-Programmen verwendet werden können. Sie ermöglichen es Entwicklern, ihre Programme einfacher und effizienter zu gestalten, indem sie bereits existierenden Code wiederverwenden. Ein Modul kann in einem Programm durch das Importieren des Modulnamens verwendet werden.
                        <br><br>
                        <b>Funktionen</b> sind in Python wiederverwendbare Code-Blöcke, die eine bestimmte Aufgabe ausführen. Sie nehmen eine Eingabe (Argumente) entgegen, verarbeiten diese und geben ein Ergebnis zurück. Funktionen helfen dabei, Code übersichtlicher zu gestalten und ermöglichen es, komplexe Aufgaben in kleinere und leichter zu handhabende Teilprobleme zu unterteilen.
                        <br><br>
                        <b>Klassen</b> sind Vorlagen, die beschreiben, wie Objekte erstellt werden sollen. Ein Objekt ist eine Instanz einer Klasse, also ein spezifisches Exemplar, das auf der Vorlage der Klasse basiert und bestimmte Eigenschaften und Methoden hat. Klassen und Objekte sind wichtige Konzepte der objektorientierten Programmierung und ermöglichen es, komplexe Programme zu erstellen, indem sie Code in wiederverwendbare Blöcke aufteilen.
                    </p>
                    <p class="lh-base fw-light py-4">
                        <u>Was ist die Syntax bei Python?</u>
                        <br><br>
                        Die Syntax in Python ist die spezifische Art und Weise, wie Anweisungen in Python-Code geschrieben werden, um bestimmte Aktionen auszuführen. Die Syntax gibt Regeln darüber, wie Codeblöcke, Funktionen, Klassen und Anweisungen geschrieben werdenmüssen, damit sie von Python interpretiert und ausgeführt werden können. Zum Beispiel müssen wir in Python Codeblöcke durch Einrückungen definieren. Wenn wir diese Regeln nicht befolgen, kann Python den Code nicht interpretieren und wird Fehlermeldungen ausgeben.
                        <br><br>
                        Python ist eine Programmiersprache mit einer klaren und einfachen Syntax. Dabei werden <b>Leerzeichen und Einrückungen</b> verwendet, um Blöcke von Code zu definieren. Einrückungen werden durch Leerzeichen oder Tabulatoren durchgeführt. Wenn du in einem Block von Code einrückst, muss du für alle anderen Blöcke von Code innerhalb des Blocks dieselbe Einrückungsebene verwenden.Außerdem können Kommentare verfasst werden, die im Code erscheinen, aber von Python nicht ausgeführt werden. In Python beginnen Kommentare mit der der Raute („#“). Dies kann auch verwendet werden, um Teile des Codes auszukommentieren. Dies ist nützlich, wenn der Code zwar deaktiviert werden soll, jedoch später wieder Verwendung findet. 
                        <br><br>
                        Folgend werden die Programmelemente in einem Beispiel dargestellt:
                    </p>
                    <!-- Video -->
                    <div class="d-flex justify-content-center py-4">
                        <img class="object-fit-fill border rounded" style="width: 100%; height: 650px" src="../../public/conent_lektion1.png">
                    </div>
                    <p class="lh-base fw-light py-4">
                        Der Python-Code besteht aus verschiedenen Elementen. Die erste Anweisung, "print("hello world")", gibt den Text "hello world" auf der Konsole aus. Die nächste Anweisung, "x=1", weist derVariablen "x" den Wert 1 zu. Die Kontrollstruktur "if x == 1:" prüft, ob die Bedingung "x == 1" erfüllt ist und führt den folgenden Codeblock aus, wenn dies der Fall ist. Die Anweisung "nothing" hat keine Auswirkungen auf das Programm und wird ignoriert. Die letzte Anweisung, "print("x is 1.")", gibt den Text "x is 1." auf der Konsole aus. Es ist jedoch zu beachten, dass diese Anweisung aufgrund fehlender Einrückungen nicht im Codeblock der if-Bedingung enthalten ist.
                    </p>
                    <!-- Code Abschnitt -->
                    <div class="py-4">
                        <p class="fw-bold">Aufgabe:</p>
                        <p class="lh-base fw-light">
                            Schreibe ein Programm mit Python, welchesden Text “Hello World” ausgibt.
                        </p>
                    
                    </div>
                    <!-- Code Abschnitt -->
                    <div class="py-4">
                        <p class="fw-bold">Aufgabe:</p>
                        <p class="lh-base fw-light">
                            Erstelle zweiString-Variablen, eineFloat-Variableund eine Integer-Variable.Die ersteString Variable soll „mystring1“ heißenund das Wort „Hello“ beinhalten. Die zweite String Variable soll „mystring2“ heißen und das Wort „World“ beinhalten.Die Float-Variable soll “float” heißen und den Wert 10.0 beinhalten. Die Integer-Variable soll “integer” heißen und den Wert 3beinhalten.
                        </p>
                    </div>
                

                    <!-- Code Abschnitt -->
                    <div class="py-4">
                        <p class="fw-bold">Aufgabe:</p>
                        <p class="lh-base fw-light">
                            Berechne das Volumen eines Kreises mit dem Radius r = 6.                        
                        </p>
                    </div>
                </div>

            </ScrollPanel>
            

        </SplitterPanel>
        <SplitterPanel>
            <Splitter layout="vertical">
                <SplitterPanel :size="90" :min-size="50">
                    <div class="h-full">
                        <Codemirror :code="code" />
                    </div>
                </SplitterPanel>
                <SplitterPanel :size="10" :minSize="10">
                    <p>{{ currentChatGptResponse }}</p>
                    <div class="flex justify-center space-x-32 ">
                        <button
                            class="bg-yellow-400 hover:bg-yellow-200 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow"
                            :class="{ 'cursor-not-allowed': ! helpButtonActive }" @click="getHelp">Help</button>
                        <button
                            class="bg-green-500 hover:bg-green-300 text-gray-800 font-semibold py-2 px-4 border-0 border-green-500 rounded-lg shadow"
                            @click="runCode">
                            Run
                        </button>
                    </div>
                </SplitterPanel>
                
            </Splitter>
        </SplitterPanel>

    </Splitter>
</template>

<script setup>
import { fetchEventSource } from '@microsoft/fetch-event-source'
import { ref } from 'vue'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Codemirror from '@/components/Codemirror.vue'
import ScrollPanel from 'primevue/scrollpanel'

const backendURI = "https://lernplattform-backend-2ch7vzacyq-ey.a.run.app"

const chatGptResponses = ref([])
const currentChatGptResponse = ref("")
const consoleContent = ref("")
const consoleVisible = ref(false)
const helpButtonActive = ref(true)
const code = ref("print('Hello World')")
const defaultCode = ref("print('Hello World')")
const task = ref("Schreibe ein Programm mit Python, welches den Text 'Hello World' ausgibt")

async function getHelp() {
    console.log("invoked")
    helpButtonActive.value = false
    consoleVisible.value = true
    const controller = new AbortController()
    const conn = await fetchEventSource(`${backendURI}/chatgpt`, {
        method: 'POST',
        body: JSON.stringify({
            code: code.value,
            task: task.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        signal: controller.signal,
        keepalive: true,
        onmessage(mess) {
            let data = JSON.parse(mess.data)
            if(typeof data.choices[0].delta.content !== "undefined") {
                currentChatGptResponse.value += data.choices[0].delta.content
            }
            if (Object.keys(data.choices[0].delta).length === 0){
                chatGptResponses.value.push(currentChatGptResponse.value)
                controller.abort()
            }
            
        },
    })
}

function reset() {
    code.value = defaultCode.value
    chatGptResponses.value = []
    currentChatGptResponse.value = ""
    helpButtonActive.value = true
}

async function runCode() {
    console.log(code.value)
    const response = await fetch(`${backendURI}/runcode`, {
        method: 'POST',
        body: JSON.stringify({
            code: code.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    consoleContent.value = data
    consoleVisible.value = true
}

</script>