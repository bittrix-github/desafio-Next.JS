"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from '@/components/header'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { EntityContextProvider } from '@/contexts/entityContext'
import { MethodContextProvider } from '@/contexts/methodContext'
import { IdContextProvider } from '@/contexts/idContext'
import { FormDataContextProvider } from '@/contexts/formDataContext'
import { NavBar } from '@/components/navBar'
import { ResultsList } from '@/components/resultsList'
import { AboutContextProvider } from '@/contexts/aboutContext'
import { RegisterForm } from '@/components/registerForm'
import { RegisterFormContextProvider } from '@/contexts/registerFormContext'
import { UpdateFormContextProvider } from '@/contexts/updateFormContext'
import { UpdateForm } from '@/components/updateForm'
import { Modal } from '@/components/modal'
import { ModalContextProvider } from '@/contexts/modalContext'
import { BurguerContextProvider } from '@/contexts/burguerContext'

export default function Home ( ) {
  const client = new QueryClient()

  return (
    <main>
      <EntityContextProvider>
        <MethodContextProvider>
          <IdContextProvider>
            <FormDataContextProvider>
              <AboutContextProvider>
                <RegisterFormContextProvider>
                  <UpdateFormContextProvider>
                    <ModalContextProvider>
                      <BurguerContextProvider>
                        <Modal/>
                        <Header/>
                        <NavBar/>
                        <About/>
                        <RegisterForm/>
                        <UpdateForm/>
                        <QueryClientProvider client={client}>
                          <ResultsList/>
                        </QueryClientProvider>
                        <Footer/>
                      </BurguerContextProvider>
                    </ModalContextProvider>
                  </UpdateFormContextProvider>
                </RegisterFormContextProvider>
              </AboutContextProvider>
            </FormDataContextProvider>
          </IdContextProvider>
        </MethodContextProvider>
      </EntityContextProvider>
    </main>
  )
}