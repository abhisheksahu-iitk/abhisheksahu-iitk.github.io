# Factory Design Pattern (Java)

## Introduction
The Factory Pattern encapsulates the creation of objects behind a common interface so that the calling code remains decoupled from concrete implementations. It centralizes instantiation logic, making it easier to swap products or introduce new variants without touching the client.

## Analogy
Think of a restaurant kitchen with multiple chefs who each prepare a different dish. Guests place an order (request a product) and the maître d' (the factory) hands the order to the right chef, then returns the finished plate. The guests never interact with the chefs directly—just with the maÃ®tre d'.

## Code Example
```java
// Product interface
interface Notification {
    void notifyUser();
}

// Concrete products
class EmailNotification implements Notification {
    public void notifyUser() {
        System.out.println("Sending an email notification");
    }
}

class SMSNotification implements Notification {
    public void notifyUser() {
        System.out.println("Sending an SMS notification");
    }
}

// Factory that decides which concrete product to instantiate
class NotificationFactory {
    static Notification create(String channel) {
        return switch (channel.toLowerCase()) {
            case "email" -> new EmailNotification();
            case "sms" -> new SMSNotification();
            default -> throw new IllegalArgumentException("Unknown channel: " + channel);
        };
    }
}

// Client code uses the factory and only depends on the Notification interface
public class FactoryDemo {
    public static void main(String[] args) {
        Notification notification = NotificationFactory.create("email");
        notification.notifyUser();
    }
}
```

## When to Use
- You want to hide the concrete implementation details from the caller.
- New products are added frequently and you want to minimize changes to client code.
- You need to switch between families of related objects at runtime.
- You aim to centralize instantiation for testing, configuration, or logging.

