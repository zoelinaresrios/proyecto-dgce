        // Modelo de datos unificado - Actividad 18 y 19
        const normativasDGCyE = [
            {
                id: 1,
                nro: "651/26",
                tipo: "Resolución",
                anio: 2026,
                mes: "Octubre",
                desc: "Aprueba pliegos y autoriza llamada a Licitación Pública para talleres de EEST.",
                fechaPublicacion: "15/10/2026",
                categoria: "Licitaciones",
                anexos: [
                    { nombre: "Pliego_Tecnico_651-26.pdf", tipo: "PDF", demo: true },
                    { nombre: "Anexo_I_Especificaciones.xlsx", tipo: "XLSX", demo: true }
                ]
            },
            {
                id: 2,
                nro: "420/25",
                tipo: "Disposición",
                anio: 2025,
                mes: "Marzo",
                desc: "Actualización de planes de estudio ciclo superior 7mo año Técnico en Programación.",
                fechaPublicacion: "20/03/2025",
                categoria: "Planes de Estudio",
                anexos: [
                    { nombre: "Grilla_Curricular_Programacion_2025.pdf", tipo: "PDF", demo: true },
                    { nombre: "Plan_Estudio_Completo.xlsx", tipo: "XLSX", demo: true }
                ]
            },
            {
                id: 3,
                nro: "128/26",
                tipo: "Circular",
                anio: 2026,
                mes: "Mayo",
                desc: "Pautas organizativas para ferias de ciencia distritales y regionales ACTE GBA.",
                fechaPublicacion: "05/05/2026",
                categoria: "Actividades",
                anexos: [
                    { nombre: "Bases_Ferias_Ciencia_2026.pdf", tipo: "PDF", demo: true }
                ]
            },
            {
                id: 4,
                nro: "969/25",
                tipo: "Resolución",
                anio: 2025,
                mes: "Diciembre",
                desc: "Aprueba la estructura curricular para el ciclo lectivo 2026 en Escuelas de Educación Técnica.",
                fechaPublicacion: "28/12/2025",
                categoria: "Currícula",
                anexos: [
                    { nombre: "Estructura_Curricular_2026.pdf", tipo: "PDF", demo: true },
                    { nombre: "Horarios_Tipos.xlsx", tipo: "XLSX", demo: true },
                    { nombre: "Carga_Horaria.pdf", tipo: "PDF", demo: true }
                ]
            }
        ];

        let normativaActual = null;

        // Inicializar años en el filtro
        function inicializarFiltros() {
            const anioFilter = document.getElementById('anioFilter');
            const anios = [...new Set(normativasDGCyE.map(n => n.anio))].sort((a, b) => b - a);
            anios.forEach(anio => {
                const option = document.createElement('option');
                option.value = anio;
                option.textContent = anio;
                anioFilter.appendChild(option);
            });
        }

        // Filtrar normativas
        function filtrarNormativas() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const tipoFiltro = document.getElementById('tipoFilter').value;
            const anioFiltro = document.getElementById('anioFilter').value;
            const mesFiltro = document.getElementById('mesFilter').value;

            const resultados = normativasDGCyE.filter(normativa => {
                // Filtrar por búsqueda (número, descripción)
                const coincideBusqueda = searchTerm === '' || 
                    normativa.nro.toLowerCase().includes(searchTerm) ||
                    normativa.desc.toLowerCase().includes(searchTerm) ||
                    normativa.tipo.toLowerCase().includes(searchTerm);
                
                // Filtrar por tipo
                const coincideTipo = tipoFiltro === 'todos' || normativa.tipo === tipoFiltro;
                
                // Filtrar por año
                const coincideAnio = anioFiltro === 'todos' || normativa.anio.toString() === anioFiltro;
                
                // Filtrar por mes
                const coincideMes = mesFiltro === 'todos' || normativa.mes === mesFiltro;
                
                return coincideBusqueda && coincideTipo && coincideAnio && coincideMes;
            });

            renderizarResultados(resultados);
        }

        // Renderizar resultados
        function renderizarResultados(lista) {
            const resultsList = document.getElementById('resultsList');
            const resultsCount = document.getElementById('resultsCount');
            
            resultsCount.textContent = `${lista.length} resultado${lista.length !== 1 ? 's' : ''} encontrado${lista.length !== 1 ? 's' : ''}`;
            
            if (lista.length === 0) {
                resultsList.innerHTML = `
                    <div class="no-results">
                        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-inbox" aria-hidden="true"></i> No se encontraron resultados</p>
                        <p style="font-size: 0.9rem;">Intenta ajustar los filtros o el término de búsqueda</p>
                    </div>
                `;
                return;
            }
            
            resultsList.innerHTML = lista.map(normativa => `
                <article class="result-card">
                    <div class="result-header">
                        <div class="result-title">
                            <span class="result-type">${normativa.tipo}</span>
                            <div class="result-number">${normativa.nro}</div>
                        </div>
                        <div class="result-date">
                            <i class="fa-solid fa-calendar-days" aria-hidden="true"></i> ${normativa.mes} ${normativa.anio}
                            ${normativa.fechaPublicacion ? `<br>Pub: ${normativa.fechaPublicacion}` : ''}
                        </div>
                    </div>
                    <p class="result-desc">${normativa.desc}</p>
                    <div class="result-meta">
                        <span class="result-meta-item"><i class="fa-solid fa-tag" aria-hidden="true"></i> ${normativa.categoria || 'Sin categoría'}</span>
                        <span class="result-meta-item"><i class="fa-solid fa-paperclip" aria-hidden="true"></i> ${normativa.anexos ? normativa.anexos.length : 0} anexo${normativa.anexos && normativa.anexos.length !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="result-actions">
                        <button class="btn btn-primary btn-small" onclick="verDetalles(${normativa.id})">Ver Detalles</button>
                        <button class="btn btn-small" onclick="verDetalles(${normativa.id})">Consultar Anexos</button>
                    </div>
                </article>
            `).join('');
        }

        // Ver detalles de una normativa
        function verDetalles(id) {
            normativaActual = normativasDGCyE.find(n => n.id === id);
            if (!normativaActual) return;
            
            document.getElementById('modalTitle').textContent = `${normativaActual.tipo} ${normativaActual.nro}`;
            document.getElementById('modalSubtitle').textContent = normativaActual.desc;
            document.getElementById('modalTipo').textContent = normativaActual.tipo;
            document.getElementById('modalNumero').textContent = normativaActual.nro;
            document.getElementById('modalAnio').textContent = normativaActual.anio;
            document.getElementById('modalMes').textContent = normativaActual.mes;
            document.getElementById('modalFecha').textContent = normativaActual.fechaPublicacion || 'No disponible';
            document.getElementById('modalCategoria').textContent = normativaActual.categoria || 'Sin categoría';
            document.getElementById('modalDescripcion').textContent = normativaActual.desc;
            
            const anexos = normativaActual.anexos || [];
            document.getElementById('modalAnexosCount').textContent = 
                `Total: ${anexos.length} documento${anexos.length !== 1 ? 's' : ''} asociado${anexos.length !== 1 ? 's' : ''}`;
            
            const anexosList = document.getElementById('modalAnexosList');
            if (anexos.length === 0) {
                anexosList.innerHTML = '<li style="justify-content: center; color: var(--text-light);">Sin anexos asociados</li>';
            } else {
                anexosList.innerHTML = anexos.map(anexo => `
                    <li>
                        <div class="annex-name">
                            <strong><i class="fa-solid fa-file-lines" aria-hidden="true"></i> ${anexo.nombre}</strong>
                            ${anexo.demo ? '<span class="annex-badge">DEMO</span>' : ''}
                        </div>
                        <button class="btn btn-small btn-primary" onclick="descargarAnexo('${anexo.nombre}', ${anexo.demo})">
                            ${anexo.tipo === 'PDF' ? 'Descargar' : 'Abrir'} ${anexo.tipo}
                        </button>
                    </li>
                `).join('');
            }
            
            document.getElementById('detailModal').classList.add('active');
        }

        // Descargar anexo (demo)
        function descargarAnexo(nombre, esDemo) {
            if (esDemo) {
                alert(`Archivo de demostración\n\n"${nombre}"\n\nEste es un archivo de ejemplo para fines demostrativos del prototipo.\nNo se trata de un documento oficial de la DGCyE.`);
            } else {
                alert(`Descargando: ${nombre}`);
            }
        }

        // Cerrar modal
        function cerrarModal() {
            document.getElementById('detailModal').classList.remove('active');
        }

        // Limpiar filtros
        function limpiarFiltros() {
            document.getElementById('searchInput').value = '';
            document.getElementById('tipoFilter').value = 'todos';
            document.getElementById('anioFilter').value = 'todos';
            document.getElementById('mesFilter').value = 'todos';
            filtrarNormativas();
        }

        // Mostrar todos
        function mostrarTodos() {
            limpiarFiltros();
        }

        // Filtrar por tipo desde sidebar
        function filtrarPorTipo(tipo) {
            document.getElementById('tipoFilter').value = tipo;
            filtrarNormativas();
            // Scroll to results
            document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Buscar por número desde destacados
        function buscarPorNumero(nro) {
            document.getElementById('searchInput').value = nro;
            document.getElementById('tipoFilter').value = 'todos';
            document.getElementById('anioFilter').value = 'todos';
            document.getElementById('mesFilter').value = 'todos';
            filtrarNormativas();
            document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Event Listeners
        document.getElementById('searchInput').addEventListener('input', filtrarNormativas);
        document.getElementById('tipoFilter').addEventListener('change', filtrarNormativas);
        document.getElementById('anioFilter').addEventListener('change', filtrarNormativas);
        document.getElementById('mesFilter').addEventListener('change', filtrarNormativas);

        // Sidebar navigation
        document.querySelectorAll('.sidebar-nav button').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.sidebar-nav button').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const section = this.dataset.section;
                if (section === 'planes') {
                    alert('Sección Planes de Estudio\n\nEsta sección permite consultar planes de estudio y sus grillas curriculares.\n\nFormatos soportados: PDF y archivos Excel (.xlsx)\n\nPróximamente disponible con contenido completo.');
                } else if (section === 'destacados') {
                    document.getElementById('searchInput').value = '';
                    document.getElementById('tipoFilter').value = 'todos';
                    document.getElementById('anioFilter').value = 'todos';
                    document.getElementById('mesFilter').value = 'todos';
                    filtrarNormativas();
                }
            });
        });

        // Cerrar modal al hacer clic fuera
        document.getElementById('detailModal').addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarModal();
            }
        });

        // Inicializar la aplicación
        function inicializarInterfaz() {
            inicializarFiltros();
            filtrarNormativas(); // Mostrar todos los resultados al cargar
        }

        // Ejecutar inicialización cuando el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', inicializarInterfaz);
        } else {
            inicializarInterfaz();
        }
