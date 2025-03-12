"use client";

import { useState } from "react";

export default function faq(){

    const [termos, setTermos] = useState([
        {
          titulo: 'elegibilidade',
          displayName: 'Elegibilidade',
          paragrafo: 'Ao usar o Gift U, você declara que é maior de 18 anos, forneceu informações verdadeiras, precisas e completas ao se cadastrar ou utilizar nossos serviços, e concorda com o processamento das informações fornecidas de acordo com nossa Política de Privacidade.'
        },
        {
          titulo: 'criacao-e-conteudo',
          displayName: 'Criação e Conteúdo do Site',
          paragrafo: 'Ao criar um site presente no Gift U, você concorda que todo o conteúdo enviado (textos, fotos, vídeos, áudios) é de sua responsabilidade e que não publicará conteúdo ofensivo, difamatório, ilegal ou que viole os direitos de terceiros. A Gift U Ltda não é responsável pelo conteúdo gerado pelo usuário, mas reserva-se o direito de remover conteúdo que viole estes Termos ou a legislação aplicável.'
        },
        {
          titulo: 'pagamentos',
          displayName: 'Pagamentos',
          paragrafo: 'Oferecemos as seguintes formas de pagamento: Pix, via API da Efi Bank; e cartão de crédito e débito, também processados pela API da Efi Bank. Ao realizar um pagamento, você concorda com as condições descritas e com o processamento seguro realizado pelos gateways de pagamento parceiros. Não oferecemos reembolsos após o site presente ser criado e o serviço finalizado, exceto em situações específicas, como erro técnico ou serviço não prestado conforme acordado. Para solicitações de reembolso, entre em contato conosco em suporte@gift-u.app.'
        },
        {
          titulo: 'manutencao-e-disponibilidade',
          displayName: 'Manutenção e Disponibilidade',
          paragrafo: 'A Gift U Ltda se compromete a manter o site de presente no ar por até cinco anos após sua criação. No entanto, não garantimos disponibilidade ininterrupta do serviço e podemos realizar manutenções periódicas ou emergenciais. Em caso de problemas técnicos, faremos o possível para restabelecer o serviço rapidamente.'
        },
        {
          titulo: 'direitos-de-propriedade-intelectual',
          displayName: 'Direitos de Propriedade Intelectual',
          paragrafo: 'A Gift U concede aos usuários uma licença limitada, revogável, não exclusiva e intransferível para utilizar o serviço de acordo com estes Termos de Uso. Todo o conteúdo e materiais disponibilizados pela Gift U são de propriedade exclusiva da Gift U Ltda ou de seus licenciadores, protegidos por leis de direitos autorais e normas de propriedade intelectual.'
        },
        {
          titulo: 'restricoes-de-uso',
          displayName: 'Restrições de Uso',
          paragrafo: 'Ao utilizar o Gift U, você concorda em não violar leis aplicáveis, promover material ofensivo, abusivo ou discriminatório, e não tentar interferir com o funcionamento do serviço, incluindo tentativas de hackeamento ou envio de vírus.'
        },
        {
          titulo: 'modificacoes-aos-termos',
          displayName: 'Modificações aos Termos de Uso',
          paragrafo: 'Podemos modificar estes Termos de Uso a qualquer momento. As alterações serão publicadas em nosso site e entrarão em vigor imediatamente após a publicação. É responsabilidade do usuário revisar periodicamente estes Termos. O uso continuado do serviço após as alterações constitui aceitação dos novos Termos.'
        },
        {
          titulo: 'rescisao',
          displayName: 'Rescisão',
          paragrafo: 'A Gift U Ltda se reserva o direito de suspender ou encerrar o acesso ao serviço de qualquer usuário que viole estes Termos, sem aviso prévio. Além disso, o usuário pode solicitar a exclusão do site presente ou de sua conta a qualquer momento, entrando em contato via contato@gift-u.app.'
        },
        {
          titulo: 'prevencao-de-fraudes',
          displayName: 'Prevenção de Fraudes',
          paragrafo: 'Monitoramos todas as transações realizadas em nossa plataforma e adotamos medidas de segurança para detectar e prevenir atividades fraudulentas. Caso alguma atividade suspeita seja identificada, podemos bloquear transações, contas ou até mesmo reportar às autoridades competentes.'
        },
        {
          titulo: 'politicas-para-criancas',
          displayName: 'Políticas para Crianças',
          paragrafo: 'O Gift U não é destinado a menores de 18 anos. Ao utilizar o serviço, o usuário declara que é maior de idade. Não coletamos intencionalmente informações de menores sem o consentimento adequado de seus responsáveis legais.'
        },
        {
          titulo: 'legislacao-aplicavel',
          displayName: 'Legislação Aplicável',
          paragrafo: 'Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer litígio relacionado ao uso do serviço será resolvido no foro da comarca da cidade de São Paulo, Estado de São Paulo, salvo disposição em contrário estabelecida pela legislação aplicável.'
        },
        {
          titulo: 'contato',
          displayName: 'Contato',
          paragrafo: 'Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco pelo e-mail suporte@gift-u.app.'
        }
      ])

    return(<>
    <section class="bg-gradient-to-b">
    <div class="container mx-auto lg:px-28 flex align-center justify-center pt-24 min-h-screen ">
        <div class="grid grid-cols-2 gap-6 mb-4">

            <div class=" hidden md:block md:col-span-1 sticky top-20 self-start pb-4">
                <h2 class="font-bold text-4xl text-black mb-4">Sobre</h2>
                <ul class="text-xl flex flex-col gap-2">
                    {termos.map((termo) => (
                        <li key={termo.titulo}>
                            <a href={`/termos/#${termo.titulo}`} className="hover:underline">{termo.displayName}</a>
                        </li>
                    ))}
                </ul>
            </div>


            <div class="col-span-2 md:col-span-1">
                <h2 class="font-bold text-4xl text-black mb-4">Termos e Condições</h2>
                <div class="text-xl">
                    <h3><span class="font-bold">Termos e Condições Gerais</span> V1.2</h3>
                    <p>Em vigência desde 01/11/2024</p>
                </div>

                {termos.map((termo) => (
                    <section key={termo.titulo} id={termo.titulo} className="mt-4 scroll-offset">
                        <h3 className="font-bold text-lg">{termo.displayName}</h3>
                        <p>{termo.paragrafo}</p>
                    </section>
                ))}

            </div>

        </div>
    </div>

</section>
    </>)
}