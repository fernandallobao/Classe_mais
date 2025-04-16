👩‍🏫 Classe+ — Recomendação de Monitores com K-Means
Este projeto tem como objetivo identificar alunos com facilidade em determinadas matérias e aqueles com dificuldade, sugerindo pares ideais entre eles para formar monitorias colaborativas. Tudo isso é feito com base em agrupamentos (clusters) de perfis semelhantes utilizando o algoritmo de Machine Learning K-Means.

🧠 Tecnologias e Bibliotecas Usadas
Python 🐍

Pandas

NumPy

Scikit-learn (KMeans, métricas de avaliação)

Matplotlib & Seaborn (visualização)

Google Cloud Platform (GCP) — importação dos dados

📊 Metodologia
Aplicamos o algoritmo de K-Means Clustering para agrupar alunos com base em variáveis como:

Idade

Ano escolar

Preferência de aprendizado

Horário de estudo

Estilo e frequência de estudo

Matérias que gosta

Matérias com dificuldade

Esses dados são tratados e transformados (normalização, codificação e binarização) para que o algoritmo possa calcular similaridades entre os perfis.

💡 Como Funciona
Carregamento e tratamento dos dados: Normalização, codificação de variáveis categóricas e binarização das matérias.

Aplicação do K-Means: Agrupa os alunos com perfis semelhantes.

Identificação de monitores e aprendizes:

Alunos que gostam de uma matéria são potenciais monitores.

Alunos com dificuldade nessa mesma matéria são considerados aprendizes.

Geração de pares: Garantimos que os pares sejam formados dentro do mesmo cluster e com afinidade temática.

📈 Avaliação dos Clusters
Foram utilizadas três métricas de avaliação para validar os agrupamentos:

Silhouette Score

Índice Davies-Bouldin

Índice Calinski-Harabasz

Além disso, foi aplicada PCA (Análise de Componentes Principais) para reduzir a dimensionalidade e possibilitar a visualização dos clusters.

💻 Protótipo do Front-End
Este repositório também conta com uma pasta contendo um protótipo do formulário front-end, onde os dados dos alunos são inseridos. Ele representa uma prévia do que será o aplicativo Classe+ no futuro.
O formulário ainda é estático e tem fins ilustrativos para a simulação de entrada dos dados.

🔁 Exemplo de Saída
yaml
Copiar
Editar
Monitor: Ana, Aprendiz: João, Matéria: matemática, Ano: 7
Monitor: Pedro, Aprendiz: Luiza, Matéria: história, Ano: 6
...
---

### 👩‍💻 Quem fez este projeto

- Brenda Moura [🔗](http://linkedin.com/in/brendamoura)
- Caroline Roberta [🔗](https://www.linkedin.com/in/SEU-USUÁRIO)
- Fernanda Lobão [🔗](www.linkedin.com/in/fernanda-lobao-developer)
- Rayane Mota [🔗](http://linkedin.com/in/raymotta)
- Renata Medeiros [🔗](https://www.linkedin.com/in/SEU-USUÁRIO)
- Suellen Cristina [🔗](https://www.linkedin.com/in/suellencris/)
