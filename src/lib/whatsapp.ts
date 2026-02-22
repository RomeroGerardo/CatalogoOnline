export const generateWhatsAppLink = (cart: any[], total: number) => {
    const phoneNumber = "5493573402221";
    let message = "Hola, quisiera realizar el siguiente pedido:\n\n";

    cart.forEach((item) => {
        message += `• ${item.quantity}x ${item.name} (${item.brand || 'Original'}) - $${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n*TOTAL: $${total.toFixed(2)}*`;
    message += "\n\n¿Podrían confirmarme el stock? ¡Gracias!";

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
