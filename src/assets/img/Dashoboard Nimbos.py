# mayke costa santos RM: 562680
# Matheus Goes RM: 566407
# Maria eduarda Sousa Acyole de Oliveira RM: 566337

import random  # Importa o módulo 'random' para gerar números aleatórios.
from time import sleep  # Importa a função 'sleep' do módulo 'time' para pausar a execução do programa.
from colorama import Fore, Style, \
init  # Importa classes e funções do módulo 'colorama' para adicionar cores ao texto no console.

init(autoreset=True)  # Inicializa o colorama e configura para que as cores sejam redefinidas automaticamente após cada 'print'.
print('=' * 70)
print(f"{Fore.BLUE}             Bem vindo ao Sistema de Monitoriamento NIMBOS")
print('=' * 70)

'''nome do usuario'''


def nomeUsuario(nome):
    return nome  # Retorna o nome do usuário fornecido.


'''validar o email do usuario'''


def validarEmail(email):
    # Verifica se o caractere '@' e '.' estão presentes no email para uma validação básica de formato.
    return "@" in email and "." in email


# A função 'validarSenha' foi removida, pois a opção de senha não é mais necessária, conforme solicitação anterior.

'''Sistema de busca por Cep'''


def buscaPorCep(cep):
    bueiros = []  # Inicializa uma lista vazia para armazenar os dicionários de bueiros encontrados.
    # Loop que itera um número aleatório de vezes (entre 3 e 6) para simular a quantidade de bueiros na região.
    for i in range(random.randint(3, 6)):
        bueiro = {  # Cria um dicionário para representar um bueiro com suas propriedades.
            "id": f"B{i + 1}",  # Define um ID único para o bueiro (ex: B1, B2, etc.).
            "quantidade_lixo": random.randint(0, 100),
            # Gera uma quantidade de lixo aleatória para o bueiro (de 0 a 100%).
            "vazao_agua": random.randint(0, 100)  # Adiciona a vazão de água aleatória para o bueiro (de 0 a 100%).
        }
        bueiros.append(bueiro)  # Adiciona o bueiro gerado à lista de bueiros.
    return bueiros  # Retorna a lista de bueiros encontrados na simulação.


'''retorno para usuario da situações do bueiros'''


def situacaoBueiros(qtda):
    if qtda < 30:  # Se a quantidade de lixo for menor que 30%.
        return f"{Fore.GREEN}Verde (Situação tranquila)"  # Retorna a situação "Verde" em texto verde.
    elif qtda < 70:  # Se a quantidade de lixo for menor que 70% (e maior ou igual a 30%).
        return f"{Fore.YELLOW}Amarelho (Necessita de Limpeza)"  # Retorna a situação "Amarelo" em texto amarelo.
    else:  # Se a quantidade de lixo for 70% ou mais.
        return f"{Fore.RED}Vermelho (Risco de Alagamentos)"  # Retorna a situação "Vermelho" em texto vermelho.


'''Iniciativa NIMBOS'''


def sistemaNimbos():
    print("\n✅ Monitoramento concluído com sucesso.")  # Imprime uma mensagem de conclusão do monitoramento.


'''Contato e pedido de Autoridades para limpeza'''


def informarAutoridade():
    print("\n" + '=' * 45)
    print(f"{Fore.CYAN}    DESEJA INFORMAR A Prefeitura ?")
    print('=' * 45)

    while True:  # Inicia um loop para garantir uma resposta válida do usuário.
        resposta = input(
            f"{Fore.CYAN}Digite 'sim' para informar ou 'não' para sair: ").lower().strip()  # Solicita a resposta do usuário, convertendo para minúsculas e removendo espaços.
        if resposta == 'sim':  # Se a resposta for 'sim'.
            print(f"\n{Fore.GREEN}✅ Encaminhando informações às autoridades...")  # Mensagem de encaminhamento em verde.
            # Informa números de contato para a Defesa Civil e Prefeitura.
            print(
                f"{Fore.YELLOW}Para contato direto, ligue para: {Style.BRIGHT}199 (Defesa Civil) ou 156 (Prefeitura).")
            print(f"{Fore.GREEN}Agradecemos seu apoio no monitoramento de bueiros!")  # Mensagem de agradecimento.
            break  # Sai do loop.
        elif resposta == 'não':  # Se a resposta for 'não'.
            print(
                f"{Fore.MAGENTA}Operação cancelada. Obrigado por usar o Sistema NIMBOS!")  # Mensagem de cancelamento em magenta.
            break  # Sai do loop.
        else:  # Se a resposta não for 'sim' nem 'não'.
            print(f"{Fore.RED}Opção inválida. Por favor, digite 'sim' ou 'não'.")  # Mensagem de erro em vermelho.


'''Validação de login do usuario'''
while True:  # Inicia um loop infinito para a validação de nome e email do usuário.
    nome = input("Qual e o seu nome: ")  # Solicita o nome do usuário.
    if nomeUsuario(
            nome):  # Chama a função nomeUsuario (que sempre retorna o nome, então esta condição é sempre True para um nome não vazio).
        print(
            f'Bem vindo {nome} ao Sistema monitoriamento NIMBOS')  # Imprime uma mensagem de boas-vindas personalizada.

    email = input("Digite Seu Email: ")  # Solicita o email do usuário.
    if not validarEmail(email):  # Verifica se o email é inválido usando a função validarEmail.
        print("email invalido. Tente Novamente")  # Informa que o email é inválido.
        continue  # Continua para a próxima iteração do loop (solicita novamente nome e email).

    # A solicitação e validação de senha foram removidas daqui, conforme a atualização do código.
    break  # Se o nome e o email forem válidos, sai do loop de validação.

print('=' * 45)
print(f"{Fore.BLUE}        AREA DE CONSULTA DE BUEIROS")
print('=' * 45)

'''Validação de cep'''
while True:  # Inicia um loop infinito para a validação do CEP.
    cep = input("Digite o CEP da região (somente números): ")  # Solicita o CEP ao usuário.
    # Verifica se o CEP contém apenas dígitos e tem exatamente 8 caracteres.
    if cep.isdigit() and len(cep) == 8:
        break  # Se o CEP for válido, sai do loop.
    else:
        print("CEP inválido. Deve conter 8 números.")  # Informa que o CEP é inválido.

print("\n🔎 Buscando bueiros com produto Nimbos na região...\n")  # Imprime uma mensagem indicando a busca por bueiros.

bueiros = buscaPorCep(cep)  # Chama a função buscaPorCep para simular a busca e obter a lista de bueiros.

print('=' * 45)
print(f"{Fore.BLUE}     AGUARDE PROCURANDO NIMBOS NA REGIÃO...")
print('=' * 45)
sleep(2)  # Pausa a execução por 2 segundos para simular um tempo de carregamento.

'''Apresentação dos bueiros'''
print(
    f"Região CEP: {cep} — {len(bueiros)} bueiros encontrados:\n")  # Imprime o CEP da região e o número de bueiros encontrados.

for b in bueiros:  # Itera sobre cada bueiro na lista de bueiros.
    cor = situacaoBueiros(b["quantidade_lixo"])  # Obtém a situação do bueiro (cor) com base na quantidade de lixo.
    # Imprime os detalhes de cada bueiro: ID, quantidade de lixo, vazão de água e nível de situação.
    print(f"Bueiro {b['id']} — Lixo: {b['quantidade_lixo']}% — Vazão de Água: {b['vazao_agua']}% — Nível: {cor}")

'''Execução do programa'''
if __name__ == "__main__":  # Verifica se o script está sendo executado diretamente (não importado como módulo).
    sistemaNimbos()  # Chama a função que indica a conclusão do monitoramento.
    informarAutoridade()  # Chama a função para perguntar ao usuário se deseja informar a autoridade do governo.
