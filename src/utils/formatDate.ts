const formattedDate = (dateString: string): string => {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    return '-'
  }

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getUTCFullYear().toString().substr(-2)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  const result = day + '/' + month + '/' + year + ' às ' + hours + ':' + minutes
  return result
}

const formattedDateWithoutHours = (dateString: string): string => {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    return '-'
  }

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getUTCFullYear().toString().substr(-2)

  const result = day + '/' + month + '/' + year
  return result
}

const formattedTimeAGo = (value: Date | string): string => {
  const date = new Date(value)

  if (isNaN(date.getTime())) {
    return '-'
  }
  const now = new Date()
  const timeDifference = now.getTime() - date.getTime()
  const minutesDifference = Math.floor(timeDifference / (1000 * 60))

  if (minutesDifference < 1) {
    return 'Agora mesmo'
  } else if (minutesDifference === 1) {
    return 'Há 1 minuto'
  } else if (minutesDifference < 60) {
    return `Há ${minutesDifference} minutos`
  } else if (minutesDifference < 120) {
    return 'Há 1 hora'
  } else if (minutesDifference < 1440) {
    const hoursDifference = Math.floor(minutesDifference / 60)
    return `Há ${hoursDifference} horas`
  } else {
    const daysDifference = Math.floor(minutesDifference / 1440)
    return `Há ${daysDifference} dias`
  }
}

const formattedDateMachine = (date?: Date) => {
  if (date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  return ''
}

const formatDate = (date?: Date) => {
  return date
    ? date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric'
      })
    : ''
}

export {
  formatDate,
  formattedDate,
  formattedDateMachine,
  formattedDateWithoutHours,
  formattedTimeAGo
}
